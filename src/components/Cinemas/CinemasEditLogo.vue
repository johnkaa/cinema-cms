<template>
  <div class="cinemas-edit__logo">
    <span>Логотип</span>
    <img :src="img" alt="" @click="onPickFile">
    <input
        id="inputFile"
        type="file"
        style="display: none;"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
    >
    <my-button @click="deleteLogo">Удалить</my-button>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";
export default {
  name: "CinemasEditLogo",
  components: {MyButton},
  props: ['logo', 'pathID'],
  mounted() {
    const cinemasLogoRef = ref(db, `cinemas/${this.pathID}/logo`)
    onValue(cinemasLogoRef, (snapshot) => {
      if(!snapshot.val()) {
        return
      }
      this.img = snapshot.val()
    })
  },
  data() {
    return {
      img: this.logo,
      file: null
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.file = files[0]
      const filename = files[0].name
      if (filename.indexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      fileReader.addEventListener('load', () => {
        this.img = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.$emit('createLogo', {
        img: this.img,
        file: this.file
      })
    },
    deleteLogo() {
      this.$emit('deleteLogo')
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-edit__logo {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
    img {
      cursor: pointer;
      margin: 0 40px;
      width: 200px;
      height: 200px;
  }
  span {
    margin-right: 115px;
  }
}
</style>
