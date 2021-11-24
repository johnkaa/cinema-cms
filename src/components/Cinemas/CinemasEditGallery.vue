<template>
  <div class="cinemas-edit__gallery-item">
    <my-close-button @click="deleteGalleryItem"/>
    <img :class="gallery.id" :src="img" alt="" @click="onPickFileGallery">
    <input
        type="file"
        style="display: none;"
        ref="fileInputGallery"
        accept="image/*"
        @change="onFilePickedGallery"
    >
  </div>
</template>

<script>
import MyCloseButton from "../UI/MyCloseButton";
import {mapMutations} from "vuex";
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from "../../firebase/storage";

export default {
  name: "CinemasEditGallery",
  components: {MyCloseButton},
  props: ['gallery', 'path', 'pathID', 'items'],
  data() {
    return {
      img: this.gallery.img,
    }
  },
  methods: {
    ...mapMutations(['updateCinemasGalleryItem', 'deleteCinemasGalleryItem']),
    uploadFile() {
      const path = `cinemas/${this.pathID}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      uploadBytes(storageRef, this.file)
    },
    getFileUrl() {
      const path = `cinemas/${this.pathID}/gallery/${this.gallery.id}`
      const interval = setInterval(async () => {
        await getDownloadURL(ref(storage, path))
            .then((url) => {
              if(url) {
                this.img = url
              }
            })
        if(this.img) {
          clearInterval(interval)
        }
      }, 250)
    },
    onPickFileGallery() {
      this.$refs.fileInputGallery.click()
    },
    onFilePickedGallery(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.file = files[0]
      this.filename = files[0].name
      if (this.filename.indexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      fileReader.readAsDataURL(files[0])
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      this.uploadFile()
      setTimeout(() => {
        this.getFileUrl()
      }, 1000)
      setTimeout(() => {
        this.$emit('create', {
          id: this.gallery.id,
          img: this.img
        })
      },2000)
    },
    deleteGalleryItem() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 картинка')
      }
      this.$emit('delete', {
        id: this.gallery.id,
      })
      const path = `cinemas/${this.pathID}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      deleteObject(storageRef)
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-edit__gallery-item {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 15px;
  cursor: pointer;
  img {
    width: 250px;
    height: 250px;
  }
}
</style>
