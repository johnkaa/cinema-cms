<template>
  <div class="sales-edit">
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
    <div class="sales-edit__name">
      <span>Название акции</span>
      <input type="text" placeholder="Название акции" v-model="name">
    </div>
    <div class="sales-edit__description">
      <span>Описание</span>
      <textarea placeholder="Описание" v-model="description" />
    </div>
    <div class="sales-edit__main-img">
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
    <div class="sales-edit__gallery">
      <span>Размер: 1000х1900</span>
      <sales-edit-gallery
          v-for="item in this.gallery"
          :key="item.id"
          :gallery="item"
          :id="this.id"
          :items="this.gallery"
          @update="updateGallery"
          @delete="deleteGalleryItem"
      />
      <my-button class="add text-success" @click="addSalesGalleryItem">+</my-button>
    </div>
    <div class="sales-edit__link">
      <span>Ссылка на видео</span>
      <input type="text" placeholder="Ссылка на видео в youtube" v-model="link">
    </div>
    <div class="sales-edit__seo">
      <span>SEO блок:</span>
      <form>
        <div class="sales-edit__seo-item">
          <span>URL:</span><input type="text" placeholder="URL" v-model="seo.url">
        </div>
        <div class="sales-edit__seo-item">
          <span>Title:</span><input type="text" placeholder="Title" v-model="seo.title">
        </div>
        <div class="sales-edit__seo-item">
          <span>Keywords:</span><input type="text" placeholder="Keywords" v-model="seo.keywords">
        </div>
        <div class="sales-edit__seo-item">
          <span>Description:</span><textarea placeholder="Description" v-model="seo.description"/>
        </div>
      </form>
    </div>
    <router-link class="sales-edit__btns" to="/admin/sales">
      <my-button class="sales-edit__btns-btn" @click="submit">Сохранить</my-button>
    </router-link>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {mapGetters, mapMutations} from "vuex";
import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";
import SalesEditGallery from "../../../components/Sales/SalesEditGallery";

const dateObj = new Date()
const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()

export default {
  name: "SalesEdit",
  components: {SalesEditGallery, MyButton},
  computed: mapGetters(['getStateSales', 'getStateSalesEdit']),
  mounted() {
    let data = this.getStateSales.database[this.id]
    if(!data) {
      const salesRef = ref(db, `sales/${this.id}`)
      onValue(salesRef, (snapshot) => {
        const DBdata = snapshot.val()
        if(!DBdata) {
          this.getStateSales.database[this.id] = {
            date: now,
            actual: false,
            actualValue: 'ВЫКЛ',
            name: 'Sales',
            description: '',
            img: 'https://via.placeholder.com/400',
            gallery: {
              999: {
                id: 999,
                img: 'https://via.placeholder.com/200'
              }
            },
            link: '',
            seo: {
              url: '',
              title: '',
              keywords: '',
              description: '',
            },
            ua: {
              id: this.id,
              date: now,
              name: 'Sales',
              description: '',
              img: 'https://via.placeholder.com/400',
              gallery: {
                9999: {
                  id: 9999,
                  img: 'https://via.placeholder.com/200'
                }
              },
              link: '',
              seo: {
                url: '',
                title: '',
                keywords: '',
                description: '',
              }
            }
          }
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
      this.link = data.link
      this.seo = data.seo
      this.uaItem = data.ua
    }
  },
  props: ['id'],
  data() {
    return {
      date: now,
      actual: false,
      actualValue: 'ВЫКЛ',
      name: 'Sales',
      description: '',
      img: 'https://via.placeholder.com/400',
      gallery: {
        999: {
          id: 999,
          img: 'https://via.placeholder.com/200'
        }
      },
      link: '',
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
    ...mapMutations(['uploadFileSalesImg', 'getDownloadSalesURL', 'deleteFileSalesImg']),
    submit() {
      const dateObj = new Date()
      const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
      if(this.ua) {
        this.getStateSales.database[this.id].ua = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          link: this.link,
          seo: this.seo,
        }
      } else {
        this.getStateSales.database[this.id] = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          link: this.link,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      const data = this.getStateSales.database[this.id]
      set(ref(db, `sales/${this.id}`), {
        id: this.id,
        date: now,
        actual: data.actual,
        actualValue: data.actualValue,
        name: data.name,
        description: data.description,
        img: data.img,
        gallery: data.gallery,
        link: data.link,
        seo: data.seo,
        ua: data.ua
      })
    },
    addSalesGalleryItem() {
      let date = (+new Date()-(+new Date()%100)) / 100
      if(Object.keys(this.gallery).length > 4 ) {
        return alert('Больше добавить нельзя')
      }
      this.gallery[date] = {
        id: date,
        img: 'https://via.placeholder.com/200',
      }
    },
    updateGallery(gallery) {
      this.getStateSales.database[this.id].gallery[gallery.id] = {
        id: gallery.id,
        img: gallery.img
      }
      this.gallery = this.getStateSales.database[this.id].gallery
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
      this.uploadFileSalesImg({
        id: this.id,
        file: this.file,
        ua: this.ua
      })
      this.getStateSalesEdit.img = ''
      this.getStateSalesEdit.imgUa = ''
      this.img = 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'
      const interval = setInterval(() => {
        this.getDownloadSalesURL({
          id: this.id,
          ua: this.ua
        })
        if(this.getStateSalesEdit.img) {
          clearInterval(interval)
        }
        if(this.ua) {
          if(this.getStateSalesEdit.imgUa) {
            clearInterval(interval)
          }
        }
      }, 250)
      setTimeout(() => {
        if(this.ua) {
          this.img = this.getStateSalesEdit.imgUa
        } else {
          this.img = this.getStateSalesEdit.img
        }
      }, 1500)
    },
    deleteMainImg() {
      this.img = 'https://via.placeholder.com/400'
      this.deleteFileSalesImg({
        id: this.id,
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
        this.getStateSales.database[this.id] = {
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          link: this.link,
          seo: this.seo,
          ua: this.uaItem
        }
        this.name = this.uaItem.name
        this.description = this.uaItem.description
        this.img = this.uaItem.img
        this.gallery = this.uaItem.gallery
        this.link = this.uaItem.link
        this.seo = this.uaItem.seo
      } else {
        const data = this.getStateSales.database[this.id]
        this.getStateSales.database[this.id].ua = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          img: this.img,
          gallery: this.gallery,
          link: this.link,
          seo: this.seo,
        }
        this.name = data.name
        this.description = data.description
        this.img = data.img
        this.gallery = data.gallery
        this.link = data.link
        this.seo = data.seo
        this.uaItem = data.ua
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-edit {
  padding-bottom: 50px;
  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 43px;
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
      font-size: 50px;
      font-weight: 700;
    }
    span {
      margin-right: 13px;
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
    display: block;
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