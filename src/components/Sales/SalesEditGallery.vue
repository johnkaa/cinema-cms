<template>
  <div class="sales-edit__gallery-item">
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
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import storage from "../../firebase/storage";

export default {
  name: "SalesEditGallery",
  components: {MyCloseButton},
  props: ['gallery', 'id', 'items'],
  data() {
    return {
      img: this.gallery.img,
    }
  },
  methods: {
    async uploadFile() {
      const path = `sales/${this.id}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      await uploadBytes(storageRef, this.file)
      this.img = await getDownloadURL(ref(storage, path))
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
      this.uploadFile()
      setTimeout(() => {
        this.$emit('update', {
          id: this.gallery.id,
          img: this.img
        })
      },1500)
    },
    deleteGalleryItem() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 картинка')
      }
      this.$emit('delete', {
        id: this.gallery.id,
      })
      const path = `sales/${this.id}/gallery/${this.gallery.id}`
      const storageRef = ref(storage, path)
      deleteObject(storageRef)
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-edit__gallery-item {
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