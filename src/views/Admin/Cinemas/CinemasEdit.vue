<template>
  <div class="cinemas-edit">
    <div class="switch__wrapper">
      <div class="switch">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="cinemas-edit__name">
      <span>Название кинотеатра</span>
      <input type="text" placeholder="Название кинотеатра" v-model="title">
    </div>
    <div class="cinemas-edit__description">
      <span>Описание</span>
      <textarea placeholder="Описание" v-model="description" />
    </div>
    <div class="cinemas-edit__conditions">
      <span>Условия</span>
      <textarea placeholder="Условия" v-model="conditions" />
    </div>
    <div class="cinemas-edit__logo">
      <span>Логотип</span>
      <img :src="logo" alt="" @click="onPickFileLogo">
      <input
          id="inputFile1"
          type="file"
          style="display: none;"
          ref="fileInput1"
          accept="image/*"
          @change="onFilePickedLogo"
      >
      <my-button @click="deleteLogo">Удалить</my-button>
    </div>
    <div class="cinemas-edit__main-img">
      <span>Фото верхнего баннера</span>
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
    <div class="cinemas-edit__gallery">
      <span>Размер: 1000х1900</span>
      <cinemas-edit-gallery
          v-for="item in this.gallery"
          :key="item.id"
          :gallery="item"
          :path="this.path"
          :pathID="this.id"
          :items="this.gallery"
          ref="gallery"
          @create="updateGallery"
          @delete="deleteGalleryItem"
      />
      <input class="add-gallery-item"
             type="file"
             style="display: none;"
             ref="fileInputGallery"
             accept="image/*"
             @change="addCinemasGalleryItemPicked" />
      <my-button class="add text-success" @click="addCinemasGalleryItem">+</my-button>
    </div>
    <div class="cinemas-edit__halls">
      <cinemas-halls
          :halls="this.getStateCinemasHalls.halls"
          :pathID="this.id"
          @edit="editHallsItem"
          @delete="deleteHallsItem"
      />
      <my-button class="cinemas-edit__halls-add" @click="addCinemasHallsItem"><span class="plus">+</span>добавить зал</my-button>
    </div>
    <div class="cinemas-edit__seo">
      <span>SEO блок:</span>
      <form>
        <div class="cinemas-edit__seo-item">
          <span>URL:</span><input type="text" placeholder="URL" v-model="seo.url">
        </div>
        <div class="cinemas-edit__seo-item">
          <span>Title:</span><input type="text" placeholder="Title" v-model="seo.title">
        </div>
        <div class="cinemas-edit__seo-item">
          <span>Keywords:</span><input type="text" placeholder="Keywords" v-model="seo.keywords">
        </div>
        <div class="cinemas-edit__seo-item">
          <span>Description:</span><textarea placeholder="Description" v-model="seo.description"/>
        </div>
      </form>
    </div>
    <router-link to="/admin/cinemas">
      <my-button class="cinemas-edit__btn" @click="submit">Сохранить</my-button>
    </router-link>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import CinemasEditGallery from "../../../components/Cinemas/CinemasEditGallery";
import CinemasHalls from "../../../components/Cinemas/CinemasHalls/CinemasHalls";
import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";
import {mapGetters, mapMutations} from "vuex";

const dateObj = new Date()
const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()

export default {
  name: "CinemasEdit",
  components: {CinemasHalls, CinemasEditGallery, MyButton},
  computed: {
    ...mapGetters(['getStateCinemas', 'getStateCinemasEdit', 'getStateCinemasHalls']),
  },
  mounted() {
    const dateObj = new Date()
    this.now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
    if(dateObj.getDate() < 10) {
      this.now = '0' + dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
    }
    this.setupCinema()
  },
  updated() {
    if(!this.getStateCinemas.database[this.id]) {
      this.readCinemasData()
      this.setupCinema()
    }
  },
  props: ['id'],
  data() {
    return {
      title: 'Cinema',
      description: '',
      conditions: '',
      logo: 'https://via.placeholder.com/200',
      img: 'https://via.placeholder.com/400',
      gallery: {},
      halls: {
        999: {
          id: 999,
          name: 'Зал',
          description: '',
          scheme: 'https://via.placeholder.com/200',
          img: 'https://via.placeholder.com/400',
          gallery: {},
          seo: {
            url: '',
            title: '',
            keywords: '',
            description: '',
          },
          date: now
        }
      },
      seo: {
        url: '',
        title: '',
        keywords: '',
        description: '',
      },
      file: null,
      logoFile: null,
      ua: false,
      uaItem: {},
    }
  },
  methods: {
    ...mapMutations(['readCinemasData', 'uploadFileCinemaImg', 'getDownloadCinemaURL', 'deleteFileCinemaImg', 'uploadLogoImg', 'getDownloadCinemaLogoURL', 'deleteLogoImg', 'readCinemasHallsData']),
    submit() {
      this.halls = this.getStateCinemasHalls.halls
      if(this.ua) {
        this.getStateCinemas.database[this.id].ua = {
          id: this.id,
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
        }
      } else {
        this.getStateCinemas.database[this.id] = {
          id: this.id,
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      const data = this.getStateCinemas.database[this.id]
      set(ref(db, `cinemas/${this.id}`), {
        id: this.id,
        title: data.title,
        description: data.description,
        conditions: data.conditions,
        logo: data.logo,
        img: data.img,
        gallery: data.gallery,
        halls: data.halls,
        seo: data.seo,
        ua: data.ua
      })
    },
    setupCinema() {
      const data = this.getStateCinemas.database[this.id]
      if(data) {
        this.title = data.title
        this.description = data.description
        this.conditions = data.conditions
        this.logo = data.logo
        this.img = data.img
        this.gallery = data.gallery
        this.halls = data.halls
        this.seo = data.seo
        this.uaItem = data.ua
      } else {
        const cinemasRef = ref(db, `cinemas/${this.id}`)
        onValue(cinemasRef, (snapshot) => {
          const data = snapshot.val()
          if(!data) {
            this.date = now
            this.title = 'Cinema'
            this.description = ''
            this.conditions = ''
            this.logo = 'https://via.placeholder.com/200'
            this.img = 'https://via.placeholder.com/400'
            this.gallery = {
              999: {
                id: '999',
                img: 'https://via.placeholder.com/200',
              }
            }
            this.halls = {
              999: {
                id: 999,
                name: 'Зал 1',
                description: '',
                scheme: 'https://via.placeholder.com/200',
                img: 'https://via.placeholder.com/400',
                gallery: {
                  [(+new Date()-(+new Date()%100)) / 100]: {
                    id: (+new Date()-(+new Date()%100)) / 100,
                    img: 'https://via.placeholder.com/200'
                  }
                },
                seo: {
                  url: '',
                  title: '',
                  keywords: '',
                  description: '',
                },
                date: now,
                ua: {
                  id: 999,
                  name: 'Зал 1',
                  description: '',
                  scheme: 'https://via.placeholder.com/200',
                  img: 'https://via.placeholder.com/400',
                  gallery: {
                    [((+new Date()-(+new Date()%100)) / 100) + 5]: {
                      id: ((+new Date()-(+new Date()%100)) / 100) + 5,
                      img: 'https://via.placeholder.com/200'
                    }
                  },
                  seo: {
                    url: '',
                    title: '',
                    keywords: '',
                    description: '',
                  },
                  date: now,
                }
              }
            }
            this.seo = {
              url: '',
              title: '',
              keywords: '',
              description: '',
            }
            this.file = null
            this.logoFile = null
            this.uaItem = {
              title: 'Кiнотеатр',
              description: '',
              conditions: '',
              logo: 'https://via.placeholder.com/200',
              img: 'https://via.placeholder.com/400',
              gallery: {
                9999: {
                  id: '9999',
                  img: 'https://via.placeholder.com/200',
                }
              },
              seo: {
                url: '',
                title: '',
                keywords: '',
                description: '',
              },
            }
            this.getStateCinemas.database[this.id] = {
              title: this.title,
              description: this.description,
              conditions: this.conditions,
              logo: this.logo,
              img: this.img,
              gallery: this.gallery,
              halls: this.halls,
              seo: this.seo,
              ua: this.uaItem
            }
            this.getStateCinemasHalls.halls = this.halls
          } else {
            this.title = data.title
            this.description = data.description
            this.conditions = data.conditions
            this.logo = data.logo
            this.img = data.img
            this.gallery = data.gallery
            this.halls = data.halls
            this.seo = data.seo
            this.uaItem = data.ua
          }
        })
      }
      if(this.$route.query.id) {
        const hall = this.$route.query
        this.halls[hall.id] = {
          id: hall.id,
          name: hall.name,
          description: hall.description,
          scheme: hall.scheme,
          img: hall.img,
          gallery: hall.gallery,
          seo: hall.seo,
          date: now
        }
      }
      this.readCinemasHallsData({
        path: this.id
      })
      this.halls = this.getStateCinemasHalls.halls
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
      fileReader.readAsDataURL(files[0])
      this.uploadFileCinemaImg({
        id: this.id,
        file: this.file,
        ua: this.ua
      })
      this.getStateCinemasEdit.mainImgUrl = ''
      this.getStateCinemasEdit.mainImgUrlUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      setTimeout(() => {
        const interval = setInterval(() => {
          this.getDownloadCinemaURL({
            id: this.id,
            ua: this.ua
          })
          if(this.getStateCinemasEdit.mainImgUrl) {
            clearInterval(interval)
          }
          if(this.ua) {
            if(this.getStateCinemasEdit.mainImgUrlUa) {
              clearInterval(interval)
            }
          }
        }, 250)
      }, 1000)
      setTimeout(() => {
        if(this.ua) {
          this.img = this.getStateCinemasEdit.mainImgUrlUa
        } else {
          this.img = this.getStateCinemasEdit.mainImgUrl
        }
      }, 2000)
    },
    onPickFileLogo() {
      this.$refs.fileInput1.click()
    },
    onFilePickedLogo(event) {
      const files = event.target.files
      const fileReader = new FileReader()
      this.logoFile = files[0]
      this.filename = files[0].name
      if (this.filename.indexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      fileReader.readAsDataURL(files[0])
      this.uploadLogoImg({
        id: this.id,
        file: this.logoFile,
        ua: this.ua
      })
      this.getStateCinemasEdit.logoUrl = ''
      this.getStateCinemasEdit.logoUrlUa = ''
      this.logo = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      setTimeout(() => {
        const interval = setInterval(() => {
          this.getDownloadCinemaLogoURL({
            id: this.id,
            ua: this.ua
          })
          if(this.getStateCinemasEdit.logoUrl) {
            clearInterval(interval)
          }
          if(this.ua) {
            if(this.getStateCinemasEdit.logoUrlUa) {
              clearInterval(interval)
            }
          }
        }, 250)
      }, 1000)

      setTimeout(() => {
        if(this.ua) {
          this.logo = this.getStateCinemasEdit.logoUrlUa
        } else {
          this.logo = this.getStateCinemasEdit.logoUrl
        }
      }, 2000)
    },
    deleteLogo() {
      this.logo = 'https://via.placeholder.com/200'
      this.deleteLogoImg({
        id: this.id
      })
    },
    deleteMainImg() {
      this.img = 'https://via.placeholder.com/400'
      this.deleteFileCinemaImg({
        id: this.id,
      })
    },
    addCinemasGalleryItem() {
      if(Object.keys(this.gallery).length > 4 ) {
        return alert('Больше добавить нельзя')
      }
      this.$refs.fileInputGallery.click()
    },
    addCinemasGalleryItemPicked(event) {
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
        this.getStateCinemas.database[this.id].ua.gallery[gallery.id] = {
          id: gallery.id,
          img: gallery.img
        }
      } else {
        this.getStateCinemas.database[this.id].gallery[gallery.id] = {
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
    addCinemasHallsItem() {
      if(Object.keys(this.halls).length > 6 ) {
        return alert('Больше добавить нельзя')
      }
      if(this.ua) {
        this.getStateCinemas.database[this.id].ua = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
        }
      } else {
        this.getStateCinemas.database[this.id] = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      this.$router.push({
        path: '/admin/cinemas-edit-halls/' + this.id + '/' + (+new Date()-(+new Date()%100)) / 100
      })
    },
    editHallsItem() {
      if(this.ua) {
        this.getStateCinemas.database[this.id].ua = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
        }
      } else {
        this.getStateCinemas.database[this.id] = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
          ua: this.uaItem
        }
      }
    },
    deleteHallsItem(halls) {
      delete this.getStateCinemasHalls.halls[halls.id]
    },
    setLanguage() {
      if(this.ua) {
        this.getStateCinemas.database[this.id] = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
          ua: this.uaItem
        }
        const data = this.getStateCinemas.database[this.id].ua
        if(data) {
          this.title = data.title
          this.description = data.description
          this.conditions = data.conditions
          this.logo = data.logo
          this.img = data.img
          this.gallery = data.gallery
          this.halls = data.halls
          this.seo = data.seo
        }
      } else {
        const data = this.getStateCinemas.database[this.id]
        this.getStateCinemas.database[this.id].ua = {
          title: this.title,
          description: this.description,
          conditions: this.conditions,
          logo: this.logo,
          img: this.img,
          gallery: this.gallery,
          halls: this.halls,
          seo: this.seo,
        }
        if(data) {
          this.title = data.title
          this.description = data.description
          this.conditions = data.conditions
          this.logo = data.logo
          this.img = data.img
          this.gallery = data.gallery
          this.halls = data.halls
          this.seo = data.seo
          this.uaItem = data.ua
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-edit {
  padding-bottom: 50px;
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 30px;
      width: 300px;
    }
  }
  &__description {
    display: flex;
    margin-bottom: 30px;
    textarea {
      width: 500px;
      height: 200px;
      margin-left: 115px;
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
.cinemas-edit__halls-add {
  position: relative;
  left: 25%;
  transform: translate(-50%);
  margin-bottom: 40px;
}
.plus {
  margin-right: 10px;
  color: #42b983;
  font-weight: 700;
}
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
