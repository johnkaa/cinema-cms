<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="apps">
        <h4 class="apps__title">{{ $t('footer.mobile') }}</h4>
        <div class="apps__items">
          <div class="apps__item">
            <a href=""><img src="../assets/icons/gplay.png" alt=""></a>
          </div>
          <div class="apps__item">
            <a href=""><img src="../assets/icons/app-store.png" alt=""></a>
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
        <li><a href="https://facebook.com"><img class="social__img" src="http://s1.iconbird.com/ico/2013/6/271/w513h5131371296104Facebook.png" alt=""></a></li>
        <li><a href="https://twitter.com"><img class="social__img" src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt=""></a></li>
        <li><a href="https://youtube.com"><img class="social__img" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt=""></a></li>
        <li><a href="https://instagram.com"><img class="social__img" src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt=""></a></li>
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
    }
  },
  data() {
    return {
      pages: '',
      componentKey: 0
    }
  },
  methods: {
    uploadPages() {
      const pagesRef = ref(db, 'pages')
      onValue(pagesRef, (snapshot) => {
        this.pages = snapshot.val()
      })
      Object.keys(this.pages).forEach((element) => {
        if(this.pages[element].id == '0' ||
            this.pages[element].id == '1' ||
            this.pages[element].id == '2') {
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
}
.apps__item img {
  width: 200px;
  height: 65px;
  object-fit: fill;
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
    width: 24px;
  }
}
.footer__copyright {
  text-align: center;
}
</style>