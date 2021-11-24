<template>
  <div class="pages-edit">
    <div class="switch__wrapper">
      <div class="switch__language">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="switch">
      <input type="checkbox" v-model="actual" @change="setActual">
    </div>
    <div class="pages-edit__name">
      <span>Название страницы</span>
      <input type="text" placeholder="Название страницы" v-model="name">
    </div>
    <div class="pages-edit__description">
      <span>Описание</span>
      <textarea placeholder="Описание" v-model="description" />
    </div>
    <div class="pages-edit__main-img">
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
    <div class="pages-edit__gallery">
      <span>Размер: 1000х1900</span>
      <pages-edit-gallery
          v-for="item in this.gallery"
          :key="item.id"
          :gallery="item"
          :id="this.id"
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
             @change="addPagesGalleryItemPicked" />
      <my-button class="add text-success" @click="addPagesGalleryItem">+</my-button>
    </div>
    <div class="pages-edit__seo">
      <span>SEO блок:</span>
      <form>
        <div class="pages-edit__seo-item">
          <span>URL:</span><input type="text" placeholder="URL" v-model="seo.url">
        </div>
        <div class="pages-edit__seo-item">
          <span>Title:</span><input type="text" placeholder="Title" v-model="seo.title">
        </div>
        <div class="pages-edit__seo-item">
          <span>Keywords:</span><input type="text" placeholder="Keywords" v-model="seo.keywords">
        </div>
        <div class="pages-edit__seo-item">
          <span>Description:</span><textarea placeholder="Description" v-model="seo.description"/>
        </div>
      </form>
    </div>
    <div class="pages-edit__btns">
      <router-link to="/admin/pages">
        <my-button class="pages-edit__btns-btn" @click="submit">Сохранить</my-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {mapGetters, mapMutations} from "vuex";
import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";
import PagesEditGallery from "../../../components/Pages/PagesEditGallery";

const dateObj = new Date()
const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()

export default {
  name: "PagesEdit",
  components: {PagesEditGallery, MyButton},
  computed: mapGetters(['getStatePages', 'getStatePagesEdit']),
  mounted() {
    let data = this.getStatePages.database[this.id]
    if(!data) {
      const pagesRef = ref(db, `pages/${this.id}`)
      onValue(pagesRef, (snapshot) => {
        const DBdata = snapshot.val()
        if(!DBdata) {
          this.getStatePages.database[this.id] = {
            date: now,
            actual: false,
            actualValue: 'ВЫКЛ',
            name: 'Page',
            description: '',
            img: 'https://via.placeholder.com/400',
            gallery: {
              [(+new Date()-(+new Date()%100)) / 100]: {
                id: (+new Date() - (+new Date() % 100)) / 100,
                img: 'https://via.placeholder.com/200',
              }
            },
            seo: {
              url: '',
              title: '',
              keywords: '',
              description: '',
            },
            ua: {
              date: now,
              actual: false,
              actualValue: 'ВЫКЛ',
              name: 'Page',
              description: '',
              img: 'https://via.placeholder.com/400',
              gallery: {
                [((+new Date()-(+new Date()%100)) / 100) + 5]: {
                  id: ((+new Date()-(+new Date()%100)) / 100) + 5,
                  img: 'https://via.placeholder.com/200',
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
          data = this.getStatePages.database[this.id]
          this.actual = data.actual
          this.actualValue = data.actualValue
          this.name = data.name
          this.description = data.description
          this.img = data.img
          this.gallery = data.gallery
          this.seo = data.seo
          this.uaItem = data.ua
        } else {
          this.actual = DBdata.actual
          this.actualValue = DBdata.actualValue
          this.name = DBdata.name
          this.description = DBdata.description
          this.img = DBdata.img
          this.gallery = DBdata.gallery
          this.link = DBdata.link
          this.seo = DBdata.seo
          this.uaItem = DBdata.ua
        }
      })
    } else {
      this.actual = data.actual
      this.actualValue = data.actualValue
      this.name = data.name
      this.description = data.description
      this.img = data.img
      this.gallery = data.gallery
      this.seo = data.seo
      this.uaItem = data.ua
    }
  },
  props: ['id'],
  data() {
    return {
      actual: false,
      actualValue: 'ВЫКЛ',
      name: 'Page',
      description: '',
      date: now,
      img: 'https://via.placeholder.com/400',
      gallery: {},
      seo: {
        url: '',
        title: '',
        keywords: '',
        description: '',
      },
      ua: false,
      uaItem: {}
    }
  },
  methods: {
    ...mapMutations(['uploadFilePagesImg', 'getDownloadPagesURL', 'deleteFilePagesImg']),
    submit() {
      if(this.ua) {
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
        }
      } else {
        this.uaItem.actual = this.actual
        this.uaItem.actualValue = this.actualValue
        this.getStatePages.database[this.id] = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      const data = this.getStatePages.database[this.id]
      set(ref(db, `pages/${this.id}`), {
        id: this.id,
        date: now,
        actual: data.actual,
        actualValue: data.actualValue,
        name: data.name,
        description: data.description,
        img: data.img,
        gallery: data.gallery,
        seo: data.seo,
        ua: data.ua
      })
    },
    addPagesGalleryItem() {
      if(Object.keys(this.gallery).length > 4 ) {
        return alert('Больше добавить нельзя')
      }
      this.$refs.fileInputGallery.click()
    },
    addPagesGalleryItemPicked(event) {
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
    deleteGalleryItem(gallery) {
      delete this.gallery[gallery.id]
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
      this.uploadFilePagesImg({
        id: this.id,
        file: this.file,
        ua: this.ua
      })
      this.getStatePagesEdit.img = ''
      this.getStatePagesEdit.imgUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      setTimeout(() => {
        const interval = setInterval(() => {
          this.getDownloadPagesURL({
            id: this.id,
            ua: this.ua
          })
          if(this.getStatePagesEdit.img) {
            clearInterval(interval)
          }
          if(this.ua) {
            if(this.getStatePagesEdit.imgUa) {
              clearInterval(interval)
            }
          }
        }, 250)
      }, 1000)
      setTimeout(() => {
        if(this.ua) {
          this.img = this.getStatePagesEdit.imgUa
        } else {
          this.img = this.getStatePagesEdit.img
        }
      }, 2000)
    },
    deleteMainImg() {
      this.img = 'https://via.placeholder.com/400'
      this.deleteFilePagesImg({
        id: this.id,
        ua: this.ua
      })
    },
    setActual() {
      if(this.actual) {
        this.actualValue = 'ВКЛ'
      } else {
        this.actualValue = 'ВЫКЛ'
      }
    },
    setLanguage() {
      if(this.ua) {
        this.getStatePages.database[this.id] = {
          id: this.id,
          date: this.date,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
          ua: this.uaItem
        }
        this.name = this.uaItem.name
        this.description = this.uaItem.description
        this.img = this.uaItem.img
        this.gallery = this.uaItem.gallery
        this.seo = this.uaItem.seo
      } else {
        const data = this.getStatePages.database[this.id]
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          date: this.date,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          seo: this.seo,
        }
        this.name = data.name
        this.description = data.description
        this.img = data.img
        this.gallery = data.gallery
        this.seo = data.seo
        this.uaItem = data.ua
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pages-edit {
  padding-bottom: 50px;
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      width: 300px;
    }
    span {
      width: 150px;
      margin-right: 15px;
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
      font-size: 50px;
      font-weight: 700;
    }
    span {
      margin-right: 13px;
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
.switch {
  position: absolute;
  right: 10px;
}
.switch input[type='checkbox'] {
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background: #c6c6c6;
  border-radius: 20px;
  transition: .5s;
  box-shadow: inset 0 0 5px rgba(0,0,0, .2);
  cursor: pointer;
}
.switch input:checked[type='checkbox'] {
  background: #42b983;
}
.switch input[type='checkbox']:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #fff;
  transition: .5s;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0,0,0, .2);
}
.switch input:checked[type='checkbox']:before {
  left: 20px;
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
.switch__language {
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
