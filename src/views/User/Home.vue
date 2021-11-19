<template>
  <div class="main">
    <img class="bg" :src="this.getStateBanner.database.img" alt="">
    <div class="banners__top" v-if="this.getStateBannersTop.database.active">
      <carousel :slider="this.getStateBannersTop.database"/>
    </div>
    <div class="films-now">
      <h3 class="films-now__title title">{{ $t('home.now') }} <span>{{ now }}</span></h3>
      <div class="films-now__items films__items">
        <div class="films-now__item films__item" v-for="item in filmsNow" :key="item.id">
          <router-link :to="'/films/now/' + item.id">
            <img :src="item.img" alt="">
            <p class="films-now__name films__name">{{ item.title }}</p>
          </router-link>
          <my-button class="films-now__btn">{{ $t('home.buy') }}</my-button>
        </div>
      </div>
    </div>
    <div class="films-soon">
      <h3 class="films-soon__title title">{{ $t('home.soon') }}</h3>
      <div class="films-soon__items films__items">
        <div class="films-soon__item films__item" v-for="item in filmsSoon" :key="item.id">
          <router-link :to="'/films/soon/' + item.id">
            <img :src="item.img" alt="">
            <p class="films-soon__name films__name">{{ item.title }}</p>
          </router-link>
          <p class="films-soon__date">С {{dateSoon}}</p>
        </div>
      </div>
    </div>
    <div class="banners__sales" v-if="this.getStateBannersSales.database.active">
      <h3 class="banners__sales-title title">{{ $t('home.news') }}</h3>
      <carousel :slider="this.getStateBannersSales.database"/>
    </div>
    <div class="seo">
      <h4 class="seo__title title">SEO текст</h4>
      <p class="seo__text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import Carousel from "../../components/Carousel";
import {mapGetters} from "vuex";
import MyButton from "../../components/UI/MyButton";
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";

export default {
  name: "Home",
  components: {
    MyButton,
    Carousel
  },
  mounted() {
    this.uploadData()
  },
  watch: {
    '$i18n.locale'() {
      this.uploadData()
    }
  },
  computed: mapGetters(['getStateBannersTop', 'getStateBanner', 'getStateBannersSales', 'getStateFilmsNow', 'getStateFilmsSoon', 'getStateLang']),
  data() {
    return {
      filmsNow: {},
      filmsSoon: {},
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      monthsUA: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтеня', 'Листопада', 'Грудня'],
      date: '',
      now: '',
      dateSoon: '',
      description: ''
    }
  },
  methods: {
    async uploadData() {
      const dateObj = new Date()
      this.date = dateObj.getDate() + ' ' +  this.months[(dateObj.getMonth())]
      this.dateSoon = '1 ' + this.months[(dateObj.getMonth() + 1)]
      this.setDate()
      if(this.$i18n.locale === 'ua') {
        this.date = dateObj.getDate() + ' ' +  this.monthsUA[(dateObj.getMonth())]
        this.dateSoon = '1 ' + this.monthsUA[(dateObj.getMonth() + 1)]
      }
      const filmsNowRef = await ref(db, 'films/filmsNow')
      await onValue(filmsNowRef, (snapshot) => {
        this.filmsNow = snapshot.val()
      })
      const filmsSoonRef = await ref(db, 'films/filmsSoon')
      await onValue(filmsSoonRef, (snapshot) => {
        this.filmsSoon = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        const seoRef = await ref(db, 'pages/0/ua/description')
        await onValue(seoRef, (snapshot) => {
          this.description = snapshot.val()
        })
        await Object.keys(this.filmsNow).forEach((element) => {
          this.filmsNow[element] = this.filmsNow[element].ua
        })
        await Object.keys(this.filmsSoon).forEach((element) => {
          this.filmsSoon[element] = this.filmsSoon[element].ua
        })
      } else {
        const seoRef = await ref(db, 'pages/0/description')
        await onValue(seoRef, (snapshot) => {
          this.description = snapshot.val()
        })
      }
    },
    setDate() {
      const dateObj = new Date()
      let dateNow
      if(dateObj.getDate() < 10) {
        dateNow = '0' + dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
      } else {
        dateNow = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
      }
      dateNow = dateNow.split('.')
      this.now = dateNow[0] + ' ' + this.months[dateNow[1] - 1]
      if(this.$i18n.locale === 'ua') {
        this.now = dateNow[0] + ' ' + this.monthsUA[dateNow[1] - 1]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 20px;
  position: relative;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.banners__top {
  margin-bottom: 50px;
}
.films__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.films__name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
}
.films__item {
  margin-top: 20px;
  img {
    height: 400px;
    width: 400px;
  }
}
.films-now {
  margin-bottom: 50px;
  &__title {
    font-size: 30px;
    margin-bottom: 0;
    span {
      font-size: 22px;
    }
  }
  &__btn {
    width: 100%;
    background-color: #42b983;
  }
}
.films-soon {
  margin-bottom: 50px;
  &__title {
    margin-bottom: 0;
    font-size: 30px;
  }
  &__date {
    font-size: 30px;
    color: #42b983;
    text-align: center;
  }
}
.seo {
  padding-top: 50px;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  &__title {
    margin-bottom: 20px;
  }
  &__text {
    margin: 0;
  }
}
</style>