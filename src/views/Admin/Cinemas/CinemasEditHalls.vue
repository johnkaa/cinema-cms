<template>
  <div class="cinemas-edit-halls">
    <div class="switch__wrapper">
      <div class="switch">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="cinemas-edit-halls__name">
      <span>Номер зала</span>
      <input type="text" placeholder="Номер зала" v-model="name">
    </div>
    <div class="cinemas-edit-halls__description">
      <span>Описание</span>
      <textarea placeholder="Описание" v-model="description" />
    </div>
    <div class="cinemas-edit__scheme">
      <span>Схема зала</span>
      <img :src="scheme" alt="" @click="onPickFileScheme">
      <input
          id="inputFileScheme"
          type="file"
          style="display: none;"
          ref="fileInput1"
          accept="image/*"
          @change="onFilePickedScheme"
      >
      <my-button @click="deleteScheme">Удалить</my-button>
    </div>
    <div class="cinemas-edit-halls__main-img">
      <span>Верхний баннер</span>
      <img :src="img" alt="" @click="onPickFile">
      <input
          id="inputFile"
          type="file"
          style="display: none;"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
      >
      <my-button @click="deleteMainImg">Удалить</my-button>
    </div>
    <p>Галерея картинок:</p>
    <div class="cinemas-edit-halls__gallery">
      <span>Размер: 1000х1900</span>
      <cinemas-halls-gallery
          v-for="(item, index) in this.gallery"
          :key="index"
          :gallery="item"
          :path="this.path"
          :id="this.id"
          :items="this.gallery"
          ref="gallery"
          @create="updateGallery"
          @delete="deleteGalleryItem"
      />
      <my-button class="add text-success" @click="addHallsGalleryItem">+</my-button>
      <input class="add-gallery-item"
             type="file"
             style="display: none;"
             ref="fileInputGallery"
             accept="image/*"
             @change="addCinemasHallsGalleryItemPicked" />
    </div>
    <div class="cinemas-edit-halls__seo">
      <span>SEO блок:</span>
      <form>
        <div class="cinemas-edit-halls__seo-item">
          <span>URL:</span><input type="text" placeholder="URL" v-model="seo.url">
        </div>
        <div class="cinemas-edit-halls__seo-item">
          <span>Title:</span><input type="text" placeholder="Title" v-model="seo.title">
        </div>
        <div class="cinemas-edit-halls__seo-item">
          <span>Keywords:</span><input type="text" placeholder="Keywords" v-model="seo.keywords">
        </div>
        <div class="cinemas-edit-halls__seo-item">
          <span>Description:</span><textarea placeholder="Description" v-model="seo.description"/>
        </div>
      </form>
    </div>
    <my-button class="cinemas-edit-halls__btn" @click="submit">Сохранить</my-button>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import CinemasHallsGallery from "../../../components/Cinemas/CinemasHalls/CinemasHallsGallery";
import {mapGetters, mapMutations} from "vuex";

const dateObj = new Date()
const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()

export default {
  name: "CinemasEditHalls",
  components: {CinemasHallsGallery, MyButton},
  mounted() {
    this.gallery[(+new Date()-(+new Date()%100)) / 100] = {
      id: (+new Date()-(+new Date()%100)) / 100,
      img: 'https://via.placeholder.com/200'
    }
    setTimeout(() => {
      if(this.getStateCinemasHalls.halls[this.id]) {
        const hall = this.getStateCinemasHalls.halls[this.id]
        this.date = hall.date
        this.name = hall.name
        this.description = hall.description
        this.scheme = hall.scheme
        this.img = hall.img
        this.gallery = hall.gallery
        this.seo = hall.seo
        this.uaItem = hall.ua
      } else {
        this.date = now
        this.name = 'Зал'
        this.description = ''
        this.scheme = 'https://via.placeholder.com/200'
        this.img = 'https://via.placeholder.com/400'
        this.gallery = {
          999: {
            id: 999,
            img: 'https://via.placeholder.com/200',
          }
        }
        this.seo = {
          url: '',
          title: '',
          keywords: '',
          description: '',
        }
        this.uaItem = {
          id: this.id,
          date: now,
          name: 'Зал',
          description: '',
          scheme: 'https://via.placeholder.com/200',
          img: 'https://via.placeholder.com/400',
          gallery: {
            9999: {
              id: 9999,
              img: 'https://via.placeholder.com/200'
            }
          },
          seo: {
            url: '',
            title: '',
            keywords: '',
            description: '',
          }
        }
      }

    },500)
  },
  computed: mapGetters(['getStateHallsEdit', 'getStateCinemasHalls']),
  props: ['id', 'path'],
  data() {
    return {
      name: 'Зал',
      description: '',
      scheme: 'https://via.placeholder.com/200',
      img: 'https://via.placeholder.com/400',
      gallery: {
        999: {
          id: 999,
          img: 'https://via.placeholder.com/200'
        }
      },
      seo: {
        url: '',
        title: '',
        keywords: '',
        description: '',
      },
      date: '',
      hall: null,
      file: null,
      schemeFile: null,
      ua: false,
      uaItem: {}
    }
  },
  methods: {
    ...mapMutations(['uploadFileImgHall', 'getDownloadHallURL', 'uploadSchemeImg', 'getDownloadHallSchemeURL', 'deleteFileImgHall', 'deleteSchemeImg', 'updateCinemasHalls']),
    submit() {
      if(this.ua) {
        this.getStateCinemasHalls.halls[this.id].ua = {
          id: this.id,
          date: this.date,
          name: this.name,
          description: this.description,
          scheme: this.scheme,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
        }
        this.uaItem = this.getStateCinemasHalls.halls[this.id].ua
      } else {
        this.getStateCinemasHalls.halls[this.id] = {
          id: this.id,
          date: this.date,
          name: this.name,
          description: this.description,
          scheme: this.scheme,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      const data = this.getStateCinemasHalls.halls[this.id]
      this.hall = {
        id: this.id,
        date: this.date,
        name: data.name,
        description: data.description,
        scheme: data.scheme,
        img: data.img,
        gallery: data.gallery,
        seo: data.seo,
        ua: data.ua
      }
      this.updateCinemasHalls(this.hall)
      this.$router.push({
        path: `/admin/cinemas-edit/${this.path}`,
      });
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.file = files[0]
      this.filename = files[0].name
      if(this.filename.indexOf(".") <= 0) {
        return alert("Please add a valid file")
      }
      fileReader.readAsDataURL(files[0])
      this.uploadFileImgHall({
        path: this.path,
        id: this.id,
        file: this.file,
        ua: this.ua
      })
      this.getStateHallsEdit.hallImg = ''
      this.getStateHallsEdit.hallImgUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      const interval = setInterval(() => {
        this.getDownloadHallURL({
          path: this.path,
          id: this.id,
          file: this.file,
          ua: this.ua
        })
        if(this.getStateHallsEdit.hallImg) {
          clearInterval(interval)
        }
        if(this.ua) {
          if(this.getStateHallsEdit.hallImgUa) {
            clearInterval(interval)
          }
        }
      }, 250)
      setTimeout(() => {
        if(this.ua) {
          this.img = this.getStateHallsEdit.hallImgUa
        } else {
          this.img = this.getStateHallsEdit.hallImg
        }
      }, 1500)
    },
    onPickFileScheme() {
      this.$refs.fileInput1.click()
    },
    onFilePickedScheme(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.schemeFile = files[0]
      this.filename = files[0].name
      if (this.filename.indexOf(".") <= 0) {
        return alert("Please add a valid file")
      }
      fileReader.readAsDataURL(files[0])
      this.uploadSchemeImg({
        path: this.path,
        id: this.id,
        file: this.schemeFile,
        ua: this.ua
      })
      this.getStateHallsEdit.schemeImg = ''
      this.getStateHallsEdit.schemeImgUa = ''
      this.scheme = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      const interval = setInterval(() => {
        this.getDownloadHallSchemeURL({
          path: this.path,
          id: this.id,
          file: this.file,
          ua: this.ua
        })
        if(this.getStateHallsEdit.schemeImg) {
          clearInterval(interval)
        }
        if(this.ua) {
          if(this.getStateHallsEdit.schemeImgUa) {
            clearInterval(interval)
          }
        }
      }, 250)
      setTimeout(() => {
        if(this.ua) {
          this.scheme = this.getStateHallsEdit.schemeImgUa
        } else {
          this.scheme = this.getStateHallsEdit.schemeImg
        }
      }, 1500)
    },
    deleteScheme() {
      this.scheme = 'https://via.placeholder.com/200'
      this.deleteSchemeImg({
        path: this.path,
        id: this.id
      })
    },
    deleteMainImg() {
      this.img = 'https://via.placeholder.com/400'
      this.deleteFileImgHall({
        path: this.path,
        id: this.id,
      })
    },
    addHallsGalleryItem() {
      if(Object.keys(this.gallery).length > 4 ) {
        return alert('Больше добавить нельзя')
      }
      this.$refs.fileInputGallery.click()
    },
    addCinemasHallsGalleryItemPicked(event) {
      if(Object.keys(event.target.files).length === 0) {
        return
      }
      const date = (+new Date()-(+new Date()%100)) / 100
      this.gallery[date] = {
        id: date,
        img: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      }
      setTimeout(() => {
        this.$refs.gallery.onFilePickedGallery(event)
      }, 200)
    },
    updateGallery(gallery) {
      if(this.ua) {
        this.getStateCinemasHalls.halls[this.id].ua.gallery[gallery.id] = {
          id: gallery.id,
          img: gallery.img
        }
      } else {
        this.getStateCinemasHalls.halls[this.id].gallery[gallery.id] = {
          id: gallery.id,
          img: gallery.img
        }
      }
      this.gallery[gallery.id] = {
        id: gallery.id,
        img: gallery.img
      }
    },
    deleteGalleryItem(gallery) {
      delete this.gallery[gallery.id]
    },
    setLanguage() {
      if(this.ua) {
        this.getStateCinemasHalls.halls[this.id] = {
          id: this.id,
          date: this.date,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          scheme: this.scheme,
          seo: this.seo,
          ua: this.uaItem
        }
        const data = this.getStateCinemasHalls.halls[this.id].ua
        if(data) {
          this.name = data.name
          this.description = data.description
          this.scheme = data.scheme
          this.img = data.img
          this.gallery = data.gallery
          this.seo = data.seo
        } else {
          this.name = this.uaItem.name
          this.description = this.uaItem.description
          this.scheme = this.uaItem.scheme
          this.img = this.uaItem.img
          this.gallery = this.uaItem.gallery
          this.seo = this.uaItem.seo
        }
      } else {
        this.getStateCinemasHalls.halls[this.id].ua = {
          id: this.id,
          date: this.date,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          scheme: this.scheme,
          seo: this.seo,
        }
        const data = this.getStateCinemasHalls.halls[this.id]
        if(data) {
          this.name = data.name
          this.description = data.description
          this.scheme = data.scheme
          this.img = data.img
          this.gallery = data.gallery
          this.seo = data.seo
          this.uaItem = data.ua
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-edit-halls {
  padding-bottom: 50px;
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 50px;
      width: 300px;
    }
  }
  &__description {
    display: flex;
    margin-bottom: 30px;
    textarea {
      width: 500px;
      height: 200px;
      margin-left: 66px;
    }
  }
  &__conditions {
    display: flex;
    margin-bottom: 30px;
    textarea {
      width: 500px;
      height: 200px;
      margin-left: 130px;
    }
  }
  &__main-img {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    img {
      cursor: pointer;
      margin: 0 40px;
      max-width: 800px;
      max-height: 400px;
    }
  }
  &__gallery {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .add {
      font-weight: 700;
      font-size: 50px;
    }
  }
  &__seo {
    display: flex;
    margin-bottom: 50px;
    form {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
    }
    &-item {
      display: flex;
      width: 500px;
      span {
        min-width: 100px;
        text-align: right;
        margin-right: 5px;
      }
      input {
        width: 100%;
      }
      textarea {
        width: 100%;
      }
      & + & {
        margin-top: 10px;
      }
    }
  }
  &__btn {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
.cinemas-edit__scheme {
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
    margin-right: 35px;
  }
}
.switch__wrapper {
  position: relative;
  padding: 0 50px;
  max-width: 160px;
  margin-left: auto;
  &::before, &::after {
    position: absolute;
    font-size: 25px;
    top: 50%;
    transform: translateY(-55%);
  }
  &::before {
    content: 'RU';
    left: 0;
  }
  &::after {
    content: 'UA';
    right: 0;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch__checkbox {
  opacity: 0;
  width: 0;
  height: 0;
}
.lever {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #42b983;
  -webkit-transition: .4s;
  transition: .4s;
}
.lever:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch__checkbox:checked + .lever {
  background-color: #42b983;
}
.switch__checkbox:focus + .lever {
  box-shadow: 0 0 1px #42b983;
}
.switch__checkbox:checked + .lever:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.lever {
  border-radius: 34px;
}
.lever:before {
  border-radius: 50%;
}
</style>