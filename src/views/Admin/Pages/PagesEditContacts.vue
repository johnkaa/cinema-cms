<template>
  <div class="pages-edit-contacts">
    <div class="switch__wrapper">
      <div class="switch">
        <label class="switch__label">
          <input class="switch__checkbox" type="checkbox" @change="setLanguage" v-model="ua">
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <pages-contacts-item v-for="(contact, index) in contacts" :key="index" :contact="contact" :items="contacts" :ua="ua" @update="updateContactsItem" @delete="deleteContactsItem"/>
    <my-button class="pages-edit-contacts__add plus__btn" @click="addContactsItem"><span class="plus">+</span>Добавить контакт</my-button>
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
    <my-button class="pages-edit__btn" @click="submit">Сохранить</my-button>
    <p class="info text-success" v-if="this.uploaded">Изменения сохранены</p>
  </div>
</template>

<script>
import PagesContactsItem from "../../../components/Pages/PagesContactsItem";
import {ref, set} from "firebase/database";
import db from "../../../firebase/database";
import MyButton from "../../../components/UI/MyButton";
import {mapGetters} from "vuex";

export default {
  name: "PagesContactsEdit",
  components: {MyButton, PagesContactsItem},
  computed: mapGetters(['getStatePages']),
  mounted() {
    this.setupPageContacts()
    if(Array.isArray(this.contacts)) {
      let newContacts = {}
      for(let i = 0; i < this.contacts.length; i++) {
        newContacts[i] = {
          id: i,
          name: this.contacts[i].name,
          address: this.contacts[i].address,
          cords: this.contacts[i].cords,
          img: this.contacts[i].img
        }
      }
      this.contacts = newContacts
    }
    if(Array.isArray(this.uaItem.contacts)) {
      let newContacts = {}
      for(let i = 0; i < this.uaItem.contacts.length; i++) {
        newContacts[i] = {
          id: i,
          name: this.uaItem.contacts[i].name,
          address: this.uaItem.contacts[i].address,
          cords: this.uaItem.contacts[i].cords,
          img: this.uaItem.contacts[i].img
        }
      }
      this.uaItem.contacts = newContacts
    }
  },
  data() {
    return {
      id: 2,
      name: 'Контакты',
      actualValue: 'ВКЛ',
      date: '',
      contacts: {},
      seo: {},
      uploaded: false,
      ua: false,
      uaItem: {}
    }
  },
  methods: {
    submit() {
      if(this.ua) {
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          name: this.name,
          contacts: this.contacts,
          date: this.date,
          seo: this.seo,
        }
      } else {
        this.getStatePages.database[this.id] = {
          id: this.id,
          date: this.date,
          name: this.name,
          contacts: this.contacts,
          seo: this.seo,
          ua: this.uaItem,
        }
      }
      const data = this.getStatePages.database[this.id]
      set(ref(db, `pages/${this.id}`), {
        id: this.id,
        date: data.date,
        actualValue: 'ВКЛ',
        name: 'Контакты',
        contacts: data.contacts,
        seo: data.seo,
        ua: data.ua
      })
      this.$router.push({
        path: '/admin/pages'
      })
    },
    addContactsItem() {
      if(Object.keys(this.contacts).length > 3) {
        return alert('Больше добавить нельзя')
      }
      this.contacts[(+new Date()-(+new Date()%100)) / 100] = {
        id: (+new Date()-(+new Date()%100)) / 100,
        name: '',
        address: '',
        cords: '',
        img: 'https://via.placeholder.com/250',
      }
    },
    updateContactsItem(item) {
      this.contacts[item.id] = {
        id: item.id,
        name: item.name,
        address: item.address,
        cords: item.cords,
        img: item.img
      }
    },
    deleteContactsItem(id) {
      delete this.contacts[id]
    },
    setLanguage() {
      if(this.ua) {
        const data = this.getStatePages.database[this.id].ua
        this.getStatePages.database[this.id] = {
          id: this.id,
          date: this.date,
          contacts: this.contacts,
          seo: this.seo,
          ua: this.uaItem
        }
        this.date = data.date
        this.contacts = data.contacts
        this.seo = data.seo
      } else {
        const data = this.getStatePages.database[this.id]
        this.getStatePages.database[this.id].ua = {
          id: this.id,
          date: this.date,
          contacts: this.contacts,
          seo: this.seo,
        }
        this.date = data.date
        this.contacts = data.contacts
        this.seo = data.seo
        this.uaItem = data.ua
      }
    },
    setupPageContacts() {
      const data = this.getStatePages.database[this.id]
      this.date = data.date
      this.contacts = data.contacts
      this.seo = data.seo
      this.uaItem = data.ua
    }
  },
}
</script>

<style lang="scss" scoped>
.pages-edit-contacts {
  padding-bottom: 50px;
}
.plus__btn {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.plus {
  color: #42b983;
  font-size: 30px;
  margin-right: 15px;
}
.pages-edit__seo {
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
.pages-edit__btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.switch__wrapper {
  position: relative;
  padding: 50px;
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