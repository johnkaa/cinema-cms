<template>
  <div class="banners__item">
    <my-close-button @click="deleteBannersItem"/>
    <img class="banners__item-img" :src="img" @click="onPickFile" alt="">
    <input
        id="inputFile"
        type="file"
        style="display: none;"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
    >
    <form @submit.prevent>
      <div class="banners__item-input">
        <div class="banners__item-input__text">URL:</div>
        <input type="text" placeholder="URL" v-model="url" @change="updateDatabase">
      </div>
      <div class="banners__item-input" v-if="desc">
        <div class="banners__item-input__text">Текст:</div>
        <input type="text" placeholder="Текст" v-model="text" @change="updateDatabase">
      </div>
    </form>
  </div>
</template>

<script>
import MyCloseButton from "../UI/MyCloseButton";
import { mapMutations } from "vuex";
import storage from "../../firebase/storage";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default {
  name: "BannersItem",
  components: {
    MyCloseButton,
  },
  props: ['storeItems', 'item', 'path', 'desc'],
  data() {
    return {
      img: this.item.img,
      url: this.item.url,
      text: this.item.text,
      imgUrl: 'https://via.placeholder.com/150x100',
      file: null,
    }
  },
  methods: {
    ...mapMutations(['addBannerItem', 'deleteBannerItem']),
    onPickFile() {
      this.$refs.fileInput.click()
    },
    uploadFile() {
      const storageRef = ref(storage, `banners/${this.path}/${this.item.id}`)
      uploadBytes(storageRef, this.file)
    },
    getFileUrl() {
      const interval = setInterval(() => {
        getDownloadURL(ref(storage, `banners/${this.path}/${this.item.id}`))
            .then((url) => {
              this.imgUrl = url
            })
        if(this.imgUrl) {
          clearInterval(interval)
        }
      }, 500)
    },
    onFilePicked(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.file = files[0]
      this.filename = files[0].name
      if (this.filename.indexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      fileReader.addEventListener('load', () => {
        this.img = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.uploadFile()
      this.updateDatabase()
    },
    deleteBannersItem() {
      this.deleteBannerItem({
        path: this.path,
        id: this.item.id
      })
      const storageRef = ref(storage, `banners/${this.path}/${this.item.id}`)
      deleteObject(storageRef)
          .then()
          .catch((error) => console.error(error))
    },
    updateDatabase() {
      if(!this.desc) {
        this.text = null
      }
      this.getFileUrl()
      setTimeout(() => {
        this.addBannerItem({
          path: this.path,
          id: this.item.id,
          img: this.imgUrl,
          url: this.url,
          text: this.text,
        })
      }, 1000)
    },
  }
}
</script>

<style scoped>
.banners__item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
}
.banners__item-img {
  margin-bottom: 10px;
  height: 200px;
  cursor: pointer;
}
.banners__item-input {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.banners__item-input__text {
  margin-right: 5px;
}
</style>