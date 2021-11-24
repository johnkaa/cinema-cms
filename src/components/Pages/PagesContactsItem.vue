<template>
  <div class="pages-contacts">
    <my-close-button class="pages-contacts__delete" @click="deleteItem"/>
    <div class="pages-contacts__name">
      <span>Название кинотеатра</span>
      <input type="text" placeholder="Название кинотеатра" v-model="name" @change="updateContactsItem">
    </div>
    <div class="pages-contacts__address">
      <span>Адрес</span>
      <textarea placeholder="Адресс" v-model="address" @change="updateContactsItem"/>
    </div>
    <div class="pages-contacts__cords">
      <span>Координаты для карты</span>
      <input type="text" placeholder="Координаты" v-model="cords" @change="updateContactsItem">
    </div>
    <div class="pages-contacts__logo">
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
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import MyCloseButton from "../UI/MyCloseButton";
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "PagesContactsItem",
  components: {MyCloseButton, MyButton},
  computed: mapGetters(['getStatePages', 'getStatePagesContactsEdit']),
  props: ['contact', 'items', 'ua'],
  watch: {
    ua() {
      this.setupContactsItem()
    }
  },
  data() {
    return {
      name: this.contact.name,
      address: this.contact.address,
      cords: this.contact.cords,
      img: this.contact.img,
      file: null
    }
  },
  methods: {
    ...mapMutations(['uploadFilePagesContactsImg', 'getFileUrlContacts', 'deleteFilePagesContactsImg']),
    updateContactsItem() {
      this.getStatePagesContactsEdit.img = ''
      const interval = setInterval(() => {
        this.getFileUrlContacts({
          id: this.contact.id
        })
        if(this.getStatePagesContactsEdit.img) {
          clearInterval(interval)
        }
      },250)
      this.$emit('update', {
        id: this.contact.id,
        name: this.name,
        address: this.address,
        cords: this.cords,
        img: this.img
      })
    },
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
      fileReader.readAsDataURL(files[0])
      this.uploadFilePagesContactsImg({
        id: this.contact.id,
        file: this.file,
        ua: this.ua
      })
      this.getStatePagesContactsEdit.img = ''
      this.getStatePagesContactsEdit.imgUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      setTimeout(() => {
        const interval = setInterval(() => {
          this.getFileUrlContacts({
            id: this.contact.id,
            ua: this.ua
          })
          if(this.getStatePagesContactsEdit.img) {
            clearInterval(interval)
          }
          if(this.ua) {
            if(this.getStatePagesContactsEdit.imgUa) {
              clearInterval(interval)
            }
          }
        }, 250)
      }, 1000)
      setTimeout(() => {
        if(this.ua) {
          this.img = this.getStatePagesContactsEdit.imgUa
        } else {
          this.img = this.getStatePagesContactsEdit.img
        }
        this.updateContactsItem()
      }, 2000)
    },
    deleteItem() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должен быть хотя бы 1 контакт')
      }
      this.$emit('delete', this.contact.id)
      this.deleteFilePagesContactsImg({
        id: this.contact.id,
      })
    },
    deleteLogo() {
      this.img = 'https://via.placeholder.com/250'
    },
    setupContactsItem() {
      if(this.ua) {
        const data = this.getStatePages.database[2].ua.contacts[this.contact.id]
        this.name = data.name
        this.address = data.address
        this.cords = data.cords
        this.img = data.img
      } else {
        const data = this.getStatePages.database[2].contacts[this.contact.id]
        this.name = data.name
        this.address = data.address
        this.cords = data.cords
        this.img = data.img
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.pages-contacts {
  border-radius: 5px;
  border: 1px solid #000;
  padding: 20px;
  position: relative;
  margin-bottom: 40px;
  &__delete {
    position: absolute;
    right: 0;
    top: 0;
  }
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 30px;
      width: 300px;
    }
  }
  &__address {
    display: flex;
    margin-bottom: 30px;
    textarea {
      width: 500px;
      height: 200px;
      margin-left: 145px;
    }
  }
  &__cords {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 20px;
      width: 300px;
    }
  }
  &__logo {
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
      margin-right: 95px;
    }
  }
}
</style>
