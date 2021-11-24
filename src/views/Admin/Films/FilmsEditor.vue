<template>
  <div class="films-editor">
    <div class="switch__wrapper">
      <div class="switch">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="films-editor__name">
      <span>Название фильма</span>
      <input type="text" placeholder="Название фильма" v-model="title">
    </div>
    <div class="films-editor__description">
      <span>Описание</span>
      <textarea placeholder="Описание" v-model="description" />
    </div>
    <div class="films-editor__main-img">
      <span>Главная картинка</span>
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
    <div class="films-editor__gallery">
      <span>Размер: 1000х1900</span>
      <films-editor-gallery
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
      <my-button class="add text-success" @click="addFilmGalleryItem">+</my-button>
      <input class="add-gallery-item"
             type="file"
             style="display: none;"
             ref="fileInputGallery"
             accept="image/*"
             @change="addFilmGalleryItemPicked" />
    </div>
    <div class="films-editor__link">
      <span>Ссылка на трейлер</span>
      <input type="text" placeholder="Ссылка на видео в youtube" v-model="link">
    </div>
    <div class="films-editor__type">
      <span>Тип кино</span>
      <div class="films-editor__type-item">
        <input type="checkbox" id="3d" name="3d" v-model="type.type3D">
        <label for="3d">3D</label>
      </div>
      <div class="films-editor__type-item">
        <input type="checkbox" id="2d" name="2d" v-model="type.type2D">
        <label for="2d">2D</label>
      </div>
      <div class="films-editor__type-item">
        <input type="checkbox" id="IMAX" name="IMAX" v-model="type.typeIMAX">
        <label for="IMAX">IMAX</label>
      </div>
    </div>
    <div class="films-editor__seo">
      <span>SEO блок:</span>
      <form>
        <div class="films-editor__seo-item">
          <span>URL:</span><input type="text" placeholder="URL" v-model="seo.url">
        </div>
        <div class="films-editor__seo-item">
          <span>Title:</span><input type="text" placeholder="Title" v-model="seo.title">
        </div>
        <div class="films-editor__seo-item">
          <span>Keywords:</span><input type="text" placeholder="Keywords" v-model="seo.keywords">
        </div>
        <div class="films-editor__seo-item">
          <span>Description:</span><textarea placeholder="Description" v-model="seo.description"/>
        </div>
      </form>
    </div>
    <div class="films-editor__btns">
      <my-button class="films-editor__btns-btn" @click="submit">Сохранить</my-button>
      <my-button class="films-editor__btns-btn" @click="back">Назад</my-button>
    </div>
    <p class="info text-success" v-if="this.uploaded">Изменения сохранены</p>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import FilmsEditorGallery from "../../../components/Films/FilmsEditorGallery";
import {mapGetters, mapMutations} from "vuex";
import {ref, set} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "FilmsEditor",
  components: {FilmsEditorGallery, MyButton},
  computed: mapGetters(['getStateFilmsEditor', 'getStateFilmsNow', 'getStateFilmsSoon']),
  mounted() {
    this.fullPath = this.path[0].toUpperCase() + this.path.slice(1)
    if(this.fullPath === 'Soon') {
      this.soon = true
      const data = this.getStateFilmsSoon.database[this.id]
      if(!data) {
        this.title = 'Фильм'
        this.description = ''
        this.img = 'https://via.placeholder.com/400'
        this.gallery = {
          999: {
            id: '999',
            img: 'https://via.placeholder.com/200',
          }
        }
        this.link = ''
        this.type = {
          type2D: false,
          type3D: false,
          typeIMAX: false,
        }
        this.seo = {
          title: '',
          description: '',
          keywords: '',
          url: '',
        }
        this.uaItem = {
          title: 'Фiльм',
          description: '',
          img: 'https://via.placeholder.com/400',
          gallery: {
            9999: {
              id: '9999',
              img: 'https://via.placeholder.com/200',
            }
          },
          link: '',
          type: {
            type2D: false,
            type3D: false,
            typeIMAX: false,
          },
          seo: {
            title: '',
            description: '',
            keywords: '',
            url: '',
          },
        }
      } else {
        this.title = data.title
        this.description = data.description
        this.img = data.img
        this.gallery = data.gallery
        this.link = data.link
        this.type = data.type
        this.seo = data.seo
        this.uaItem = data.ua
      }
    } else {
      const data = this.getStateFilmsNow.database[this.id]
      if(!data) {
        this.title = 'Фильм'
        this.description = ''
        this.img = 'https://via.placeholder.com/400'
        this.gallery = {
          999: {
            id: '999',
            img: 'https://via.placeholder.com/200',
          }
        }
        this.link = ''
        this.type = {
          type2D: false,
          type3D: false,
          typeIMAX: false,
        }
        this.seo = {
          title: '',
          description: '',
          keywords: '',
          url: '',
        }
        this.uaItem = {
          title: 'Фiльм',
          description: '',
          img: 'https://via.placeholder.com/400',
          gallery: {
            9999: {
              id: '9999',
              img: 'https://via.placeholder.com/200',
            }
          },
          link: '',
          type: {
            type2D: false,
            type3D: false,
            typeIMAX: false,
          },
          seo: {
            title: '',
            description: '',
            keywords: '',
            url: '',
          },
        }
      } else {
        this.title = data.title
        this.description = data.description
        this.img = data.img
        this.gallery = data.gallery
        this.link = data.link
        this.type = data.type
        this.seo = data.seo
        this.uaItem = data.ua
      }
    }
  },
  props: ['path', 'id'],
  data() {
    return {
      title: '',
      description: '',
      img: '',
      gallery: {},
      addGalleryImg: '',
      link: '',
      type: {},
      seo: {},
      uploaded: false,
      ua: false,
      uaItem: {},
      soon: false,
      fullPath: ''
    }
  },
  methods: {
    ...mapMutations(['uploadFileFilmImg', 'getFileFilmUrl', 'deleteFileFilmImg']),
    submit() {
      if(this.ua) {
        if(this.fullPath === 'Soon') {
          this.getStateFilmsSoon.database[this.id].ua = {
            id: this.id,
            soon: this.soon,
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
          }
          const data = this.getStateFilmsSoon.database[this.id]
          set(ref(db, `films/films${this.fullPath}/${this.id}`), {
            id: this.id,
            soon: this.soon,
            title: data.title,
            description: data.description,
            img: data.img,
            gallery: data.gallery,
            link: data.link,
            type: data.type,
            seo: data.seo,
            ua: data.ua
          })
        } else {
          this.getStateFilmsNow.database[this.id].ua = {
            id: this.id,
            soon: this.soon,
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
          }
          const data = this.getStateFilmsNow.database[this.id]
          set(ref(db, `films/films${this.fullPath}/${this.id}`), {
            id: this.id,
            soon: this.soon,
            title: data.title,
            description: data.description,
            img: data.img,
            gallery: data.gallery,
            link: data.link,
            type: data.type,
            seo: data.seo,
            ua: data.ua
          })
        }
      } else {
        set(ref(db, `films/films${this.fullPath}/${this.id}`), {
          id: this.id,
          soon: this.soon,
          title: this.title,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          link: this.link,
          type: this.type,
          seo: this.seo,
          ua: this.uaItem
        })
      }
      this.$router.push({
        path: '/admin/films'
      })
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
      this.uploadFileFilmImg({
        path: this.fullPath,
        id: this.id,
        file: this.file,
        ua: this.ua
      })
      this.getStateFilmsEditor.img = ''
      this.getStateFilmsEditor.imgUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      setTimeout(() => {
        const interval = setInterval(() => {
          this.getFileFilmUrl({
            path: this.fullPath,
            id: this.id,
            ua: this.ua
          })
          if(this.getStateFilmsEditor.img) {
            clearInterval(interval)
          }
          if(this.ua) {
            if(this.getStateFilmsEditor.imgUa) {
              clearInterval(interval)
            }
          }
        }, 250)
      }, 1000)
      setTimeout(() => {
        this.img = this.getStateFilmsEditor.img
        if(this.ua) {
          this.img = this.getStateFilmsEditor.imgUa
        }
      }, 2000)
    },
    addFilmGalleryItem() {
      if(Object.keys(this.gallery).length > 4 ) {
        return alert('Больше добавить нельзя')
      }
      this.$refs.fileInputGallery.click()
    },
    addFilmGalleryItemPicked(event) {
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
      this.gallery[gallery.id] = {
        id: gallery.id,
        img: gallery.img
      }
    },
    deleteGalleryItem(gallery){
      delete this.gallery[gallery.id]
    },
    deleteMainImg() {
      set(ref(db, `films/films${this.fullPath}/${this.id}`), {
        id: this.id,
        title: this.title,
        description: this.description,
        img: 'https://via.placeholder.com/400x400',
        gallery: this.gallery,
        link: this.link,
        type: this.type,
        seo: this.seo
      })
      this.deleteFileFilmImg({
        path: this.fullPath,
        id: this.id,
      })
    },
    back() {
      this.$router.push({
        path: '/admin/films'
      })
    },
    setLanguage() {
      if(this.fullPath === 'Now') {
        if(this.ua) {
          this.getStateFilmsNow.database[this.id] = {
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
            ua: this.uaItem
          }
          this.title = this.uaItem.title
          this.description = this.uaItem.description
          this.img = this.uaItem.img
          this.gallery = this.uaItem.gallery
          this.link = this.uaItem.link
          this.type = this.uaItem.type
          this.seo = this.uaItem.seo
        } else {
          const data = this.getStateFilmsNow.database[this.id]
          this.getStateFilmsNow.database[this.id].ua = {
            id: this.id,
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
          }
          this.title = data.title
          this.description = data.description
          this.img = data.img
          this.gallery = data.gallery
          this.link = data.link
          this.type = data.type
          this.seo = data.seo
          this.uaItem = data.ua
        }
      } else {
        if(this.ua) {
          this.getStateFilmsSoon.database[this.id] = {
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
            ua: this.uaItem
          }
          this.title = this.uaItem.title
          this.description = this.uaItem.description
          this.img = this.uaItem.img
          this.gallery = this.uaItem.gallery
          this.link = this.uaItem.link
          this.type = this.uaItem.type
          this.seo = this.uaItem.seo
        } else {
          const data = this.getStateFilmsSoon.database[this.id]
          this.getStateFilmsSoon.database[this.id].ua = {
            id: this.id,
            title: this.title,
            description: this.description,
            img: this.img,
            gallery: this.gallery,
            link: this.link,
            type: this.type,
            seo: this.seo,
          }
          this.title = data.title
          this.description = data.description
          this.img = data.img
          this.gallery = data.gallery
          this.link = data.link
          this.type = data.type
          this.seo = data.seo
          this.uaItem = data.ua
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.films-editor {
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
      margin-left: 90px;
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
  &__link {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    input {
      width: 300px;
      margin-left: 30px;
    }
  }
  &__type {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    &-item {
      margin: 0 15px;
      input {
        margin-right: 5px;
      }
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
  &__btns {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    &-btn + &-btn {
      margin-left: 40px;
    }
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
