<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="apps">
        <h4 class="apps__title">{{ $t('footer.mobile') }}</h4>
        <div class="apps__items">
          <div class="apps__item">
            <a href="#"><span class="iconify" data-icon="flat-ui:google"></span></a>
          </div>
          <div class="apps__item">
            <a href="#"><span class="iconify" data-icon="flat-ui:app-store"></span></a>
          </div>
        </div>
      </div>
      <ul class="footer__list">
        <li><router-link to="/poster">{{ $t('footer.poster') }}</router-link></li>
        <li><router-link to="/schedule">{{ $t('footer.schedule') }}</router-link></li>
        <li><router-link to="/poster/soon">Скоро в прокате</router-link></li>
        <li><router-link to="/cinemas">{{ $t('footer.cinemas') }}</router-link></li>
        <li><router-link to="/sales">{{ $t('footer.sales') }}</router-link></li>
      </ul>
      <ul class="footer__list">
        <li><router-link to="/pages/1">{{ $t('footer.about') }}</router-link></li>
        <li><router-link to="/news">{{ $t('footer.news') }}</router-link></li>
        <li v-for="item in pages" :key="item.id"><router-link :to="'/pages/' + item.id">{{ item.name }}</router-link></li>
      </ul>
      <ul class="social">
        <li><a href="#"><span class="social__img iconify" data-icon="brandico:facebook" style="color: #2e6cff;"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="logos:twitter"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="logos:youtube-icon"></span></a></li>
        <li><a href="#"><span class="social__img iconify" data-icon="akar-icons:instagram-fill" style="color: #ff8463;"></span></a></li>
      </ul>
    </div>
    <p class="footer__copyright">@KinoCMS 2021, all rights reserved</p>
  </footer>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../firebase/database";

export default {
  name: "Footer",
  mounted() {
    this.uploadPages()
  },
  watch: {
    '$i18n.locale'() {
      this.uploadPages()
    },
    phone() {
      this.uploadPages()
    }
  },
  data() {
    return {
      pages: '',
      componentKey: 0,
      phone: ''
    }
  },
  methods: {
    async uploadPages() {
      const phoneRef = await ref(db, 'pages/0/phone')
      await onValue(phoneRef, (snapshot) => {
        this.phone = snapshot.val()
      })
      const pagesRef = await ref(db, 'pages')
      await onValue(pagesRef, (snapshot) => {
        this.pages = snapshot.val()
      })
      Object.keys(this.pages).forEach((element) => {
        if(this.pages[element].id === '0' ||
            this.pages[element].id === '1' ||
            this.pages[element].id === '2') {
          delete this.pages[element]
        }
      })
      Object.keys(this.pages).forEach((element) => {
        if(!this.pages[element].actual) {
          delete this.pages[element]
        }
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.pages).forEach((element) => {
          this.pages[element] = this.pages[element].ua
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 30px;
  padding: 30px;
  border-top: 3px solid #42b983;
}
.footer__inner {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 40px;
}
.apps__items {
  display: flex;
  font-size: 80px;
}
.apps__item + .apps__item {
  margin-left: 30px;
}
.footer__list {
  li:nth-child(1) {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
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
.footer__copyright {
  text-align: center;
}
</style>