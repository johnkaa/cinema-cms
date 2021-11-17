<template>
  <div class="cinemas-edit-halls__gallery-item">
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
import MyCloseButton from "../../UI/MyCloseButton";
import {mapMutations} from "vuex";
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from "../../../firebase/storage";

export default {
  name: "CinemasEditGallery",
  components: {MyCloseButton},
  props: ['gallery', 'path', 'id', 'items'],
  data() {
    return {
      img: this.gallery.img,
    }
  },
  methods: {
    ...mapMutations(['updateCinemasGalleryItem', 'deleteCinemasGalleryItem']),
    uploadFile() {
      const path = `cinemas/${this.path}/halls/${this.id}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      uploadBytes(storageRef, this.file)
    },
    getFileUrl() {
      const path = `cinemas/${this.path}/halls/${this.id}/gallery/${this.gallery.id}`
      const interval = setInterval(() => {
        getDownloadURL(ref(storage, path))
            .then((url) => {
              this.img = url
            })
        if(this.img) {
          clearInterval(interval)
        }
      }, 1000)
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
      fileReader.addEventListener('load', () => {
        this.img = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.uploadFile()
      this.addItem()
      setTimeout(() => {
        this.$emit('create', {
          id: this.gallery.id,
          img: this.img
        })
      },1500)
    },
    addItem() {
      setTimeout(() => {
        this.getFileUrl()
      }, 200)
    },
    deleteGalleryItem() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 картинка')
      }
      this.$emit('delete', {
        id: this.gallery.id,
      })
      const path = `cinemas/${this.path}/halls/${this.id}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      deleteObject(storageRef)
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-edit-halls__gallery-item {
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