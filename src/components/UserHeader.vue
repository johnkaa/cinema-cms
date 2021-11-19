<template>
  <header class="header">
    <div class="header__top">
      <router-link class="logo" to="/"><img class="logo__img" src="../assets/logo.webp" alt="" width="80px"></router-link>
      <form class="header__search" @submit.prevent>
        <input type="text" :placeholder="$t('header.search')" v-model="searchField">
        <my-button class="header__search-btn" @click="search">
          <span class="iconify search" data-icon="clarity:search-line"></span>
        </my-button>
      </form>
      <ul class="social">
        <li><a href="#"><span class="social__img iconify" data-icon="brandico:facebook" style="color: #2e6cff;"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="logos:twitter"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="logos:youtube-icon"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="akar-icons:instagram-fill" style="color: #ff8463;"></span></a></li>
      </ul>
      <div class="numbers">
        <div><a :href="'tel:' + this.phone">+{{ phone }}</a></div>
      </div>
      <div class="header__btns" v-if="this.getStateAuth.auth">
        <router-link class="header__admin" v-if="this.getStateAuth.currentUser.id === 4" to="/admin/stats">
          <my-button>Админка</my-button>
        </router-link>
        <router-link class="header__cabinet" href="/" to="/cabinet">
          <span class="header__cabinet-icon iconify" data-icon="bx:bxs-user-circle"></span>{{ $t('header.cabinet') }}
        </router-link>
        <div @click="logout">
          <a class="header__quit" href="/"><span class="iconify" data-icon="ls:logout"></span></a>
        </div>
      </div>
      <div class="header__btns" v-else-if="!this.getStateAuth.auth">
        <router-link class="header__btn" to="/login">
          <my-button>{{ $t('header.login') }}</my-button>
        </router-link>
        <router-link class="header__btn" to="/register">
          <my-button>{{ $t('header.registration') }}</my-button>
        </router-link>
      </div>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <li><router-link to="/poster">{{ $t('header.poster') }}</router-link></li>
        <li><router-link to="/schedule">{{ $t('header.schedule') }}</router-link></li>
        <li><router-link to="/poster/soon">Скоро</router-link></li>
        <li><router-link to="/cinemas">{{ $t('header.cinemas') }}</router-link></li>
        <li><router-link to="/sales">{{ $t('header.sales') }}</router-link></li>
        <li class="submenu-wrapper"><router-link to="/pages/1">{{ $t('header.about') }}</router-link>
          <ul class="submenu">
            <li><router-link to="/news">{{ $t('header.news') }}</router-link></li>
            <li><router-link to="/contacts">{{ $t('header.contacts') }}</router-link></li>
            <li v-for="item in this.pages" :key="item.id"><router-link :to="'/pages/' + item.id">{{ item.name }}</router-link></li>
          </ul>
        </li>
        <li>
          <locale-switcher @click="setLanguage"/>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MyButton from "./UI/MyButton";
import {mapGetters, mapMutations} from "vuex";
import {getAuth, signOut} from "firebase/auth"
import {onValue, ref} from "firebase/database";
import db from "../firebase/database";
import LocaleSwitcher from "./LocaleSwitcher";

export default {
  name: "UserHeader",
  components: {LocaleSwitcher, MyButton},
  computed: mapGetters(['getStateAuth', 'getStateLang']),
  watch: {
    '$i18n.locale'() {
      this.loadHeader()
    },
    phone() {
      this.loadHeader()
    }
  },
  mounted() {
    this.loadHeader()
  },
  data() {
    return {
      phone: '',
      pages: {},
      searchField: '',
      componentKey: 0,
    }
  },
  methods: {
    ...mapMutations(['setLanguage']),
    logout() {
      const auth = getAuth()
      signOut(auth)
    },
    async loadHeader() {
      let pages = {}
      const phoneRef = await ref(db, 'pages/0/phone')
      await onValue(phoneRef, (snapshot) => {
        this.phone = snapshot.val()
      })
      const pagesRef = await ref(db, 'pages')
      await onValue(pagesRef, (snapshot) => {
        pages = snapshot.val()
      })
      Object.keys(pages).forEach((element) => {
        if(pages[element].id === '0' ||
            pages[element].id === '1' ||
            pages[element].id === '2') {
          delete pages[element]
        }
      })
      Object.keys(pages).forEach((element) => {
        if(!pages[element].actual) {
          delete pages[element]
        }
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(pages).forEach((element) => {
          pages[element] = pages[element].ua
        })
      }
      this.pages = pages
    },
    search() {
      this.$router.push({
        path: '/search',
        query: {
          searchField: this.searchField
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
  padding: 0 30px;
  border-bottom: 3px solid #42b983;
}
.header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo__img {
  width: 80px;
}
.header__search {
  display: block;
}
.header__search-btn {
  border: none;
}
.header__btns {
  display: flex;
  align-items: center;
}
.header__btn + .header__btn {
  margin-left: 15px;
}
.header__cabinet {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 50px;
  margin-right: 20px;
  color: #000;
}
.header__cabinet-icon {
  font-size: 50px;
  margin-right: 10px;
}
.header__quit {
  font-size: 30px;
}
.social {
  display: flex;
  li + li {
    margin-left: 20px;
  }
  &__img {
    font-size: 20px;
  }
}
.numbers {
  font-size: 20px;
  font-weight: 500;
}
.menu__list {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  li + li {
    margin-left: 20px;
  }
  li a:hover {
    color: #42b983;
  }
}
.submenu-wrapper {
  position: relative;
}
.submenu-wrapper:hover .submenu {
  visibility: visible;
  opacity: 1;
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
}
.submenu {
  position: absolute;
  top: 100%;
  width: 150%;
  left: -10%;
  z-index: 10;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  -webkit-transform: scaleY(0);
  -ms-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: #42b983;
  color: #fff;
  li {
    border: 1px solid #000;
  }
  li + li {
    margin-left: 0;
    border-top: none;
  }
  li a {
    padding: 5px 10px;
    width: 100%;
  }
  li a:hover {
    color: #000;
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