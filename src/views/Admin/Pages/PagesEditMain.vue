<template>
  <div class="pages-edit">
    <div class="switch__wrapper">
      <div class="switch">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="pages-edit__phone">
      <span>Телефон</span>
      <input type="text" placeholder="777 85 89" v-model="phone">
    </div>
    <div class="pages-edit__seo-text">
      <span>SEO текст:</span>
      <textarea placeholder="текст" v-model="description" />
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
      <my-button class="pages-edit__btns-btn" @click="submit">Сохранить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {ref, set} from "firebase/database";
import db from "../../../firebase/database";
import {mapGetters} from "vuex";

const dateObj = new Date()
const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()

export default {
  name: "PagesEdit",
  components: {MyButton},
  computed: mapGetters(['getStatePages']),
  mounted() {
    const data = this.getStatePages.database[this.id]
    if(!data) {
      return this.getStateNews.database[this.id] = {
        date: now,
        actual: true,
        actualValue: 'ВКЛ',
        phone: '777 85 89',
        description: '',
        seo: {
          url: '',
          title: '',
          keywords: '',
          description: '',
        },
        ua: {
          date: now,
          actual: true,
          actualValue: 'ВКЛ',
          phone: '777 85 89',
          description: '',
          seo: {
            url: '',
            title: '',
            keywords: '',
            description: '',
          },
        }
      }
    }
    this.date = data.date
    this.phone = data.phone
    this.description = data.description
    this.seo = data.seo
    this.uaItem = data.ua
  },
  data() {
    return {
      id: 0,
      actual: true,
      actualValue: 'ВКЛ',
      name: 'Главная страница',
      date: '',
      phone: '',
      description: '',
      seo: {},
      ua: false,
      uaItem: {}
    }
  },
  methods: {
    submit() {
      const dateObj = new Date()
      const now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
      if(this.ua) {
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          phone: this.phone,
          date: this.date,
          seo: this.seo,
        }
      } else {
        this.getStatePages.database[this.id] = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          name: this.name,
          description: this.description,
          phone: this.phone,
          date: this.date,
          seo: this.seo,
          ua: this.uaItem
        }
      }
      const data = this.getStatePages.database[this.id]
      set(ref(db, `pages/${this.id}`), {
        id: data.id,
        date: now,
        actual: data.actual,
        actualValue: data.actualValue,
        name: data.name,
        phone: data.phone,
        description: data.description,
        seo: data.seo,
        ua: data.ua
      })
      this.$router.push({
        path: '/admin/pages'
      })
    },
    setLanguage() {
      if(this.ua) {
        const data = this.getStatePages.database[this.id].ua
        this.getStatePages.database[this.id] = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          date: this.date,
          name: this.name,
          phone: this.phone,
          description: this.description,
          seo: this.seo,
          ua: this.uaItem
        }
        this.phone = data.phone
        this.description = data.description
        this.seo = data.seo
        this.uaItem = data.ua
      } else {
        const data = this.getStatePages.database[this.id]
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          actual: this.actual,
          actualValue: this.actualValue,
          date: this.date,
          name: this.name,
          phone: this.phone,
          description: this.description,
          seo: this.seo,
        }
        this.phone = data.phone
        this.description = data.description
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
  &__phone {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-left: 43px;
      width: 300px;
    }
  }
  &__seo-text {
    display: flex;
    margin-bottom: 30px;
    textarea {
      width: 500px;
      height: 200px;
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