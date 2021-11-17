<template>
  <div>
    <h2 class="banners__title title">{{ getStateBanner.title }}</h2>
    <div class="banners__block">
      <p class="banners__text">{{ getStateBanner.size }}</p>
      <div class="banners__items">
        <div class="banners__radio">
          <div v-for="(select, index) in getStateBanner.selects" :key="index">
            <input class="radio__btn" name="select" :id="index" type="radio" :value="select.title" v-model="getStateBanner.database.type">
            <label :for="index">{{ select.title }}</label>
          </div>
        </div>
        <img class="banners__img" :src="getStateBanner.database.img" alt="" @click="onPickFile">
        <input
            type="file"
            style="display: none;"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked"
        >
        <my-button class="banners__radio-select" @click="submit">Добавить</my-button>
        <my-button class="banners__radio-select" @click="deleteBannerFile">Удалить</my-button>
      </div>
      <p class="info text-success" v-if="getStateBanner.uploaded">Баннер добавлен</p>
      <p class="info text-danger" v-if="getStateBanner.deleted">Баннер удален</p>
    </div>
  </div>
</template>

<script>
import MyButton from '../UI/MyButton';
import { mapGetters, mapMutations } from 'vuex'
import storage from "../../firebase/storage";
import {uploadBytes, getDownloadURL, ref, deleteObject} from "firebase/storage";

const storageRef = ref(storage, 'banners/banner/banner')

export default {
  name: "BannersBanner",
  components: { MyButton },
  computed: mapGetters(['getStateBanner']),
  data() {
    return {
      file: null,
      imgUrl: null
    }
  },
  methods: {
    ...mapMutations(['addBanner', 'deleteBanner']),
    submit() {
      if(!this.getStateBanner.database.type) {
        return alert('Ошибка!')
      }
      if(!this.file) {
        return this.addBanner({
          img: this.getStateBanner.database.img,
          type: this.getStateBanner.database.type
        })
      }
      this.uploadFile()
      this.getFileUrl()
      setTimeout(() => {
        this.addBanner({
          img: this.imgUrl,
          type: this.getStateBanner.database.type,
        })
      }, 1500)
    },
    onPickFile() {
      this.$refs.fileInput.click()
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
        this.getStateBanner.database.img = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
    },
    uploadFile() {
      uploadBytes(storageRef, this.file)
    },
    getFileUrl() {
      const interval = setInterval(() => {
        getDownloadURL(ref(storage, 'banners/banner/banner'))
            .then((url) => {
              this.imgUrl = url
            })
        if(this.imgUrl) {
          clearInterval(interval)
        }
      }, 500)
    },
    deleteBannerFile() {
      this.deleteBanner()
      deleteObject(storageRef)
    }
  },
}
</script>

<style scoped>
.banners__block {
  border-radius: 5px;
  border: 1px solid #000;
  padding: 20px;
  position: relative;
}
.banners__text {
  text-align: left;
}
.banners__items {
  display: flex;
  align-items: center;
}
.banners__radio {
  text-align: left;
  margin-right: 50px;
}
.banners__img {
  cursor: pointer;
  height: 350px;
  max-width: 1100px
}
.banners__radio div + div {
  margin-top: 100px;
}
.radio__btn {
  margin-right: 10px;
}
.banners__radio-select {
  margin-left: 50px;
}
</style>