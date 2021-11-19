<template>
  <div class="halls-page">
    <img class="halls-page__img" v-lazy="{ src: img, loading: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'}" alt="">
    <div class="halls-page__inner">
      <div class="halls-page__sidebar">
        <div class="halls-page__sessions">
          <p>{{ $t('cinemas.now') }}</p>
          <div class="halls-page__session" v-for="item in 6" :key="item">
            <router-link to="/">Сеанс {{item}}</router-link>
          </div>
        </div>
        <my-button class="halls-page__session-btn" @click="routeSchedule">{{ $t('cinemas.schedule') }}</my-button>
      </div>
      <div class="halls-page__block">
        <h3 class="halls-page__title">{{name}}</h3>
        <p class="halls-page__desc">{{desc}}</p>
        <h5 class="halls-page__scheme-title">Карта зала</h5>
        <img class="halls-page__scheme-img" v-lazy="{ src: scheme, loading: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g'}" alt="">
        <gallery-carousel class="halls-page__gallery" :slider="gallery"/>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";
import GalleryCarousel from "../../../components/GalleryCarousel";
import MyButton from "../../../components/UI/MyButton";

export default {
  name: "HallsPage",
  components: {MyButton, GalleryCarousel},
  props: {
    cinemaID: Number || String,
    hallID: Number || String
  },
  mounted() {
    this.setupHall()
  },
  watch: {
    '$i18n.locale'() {
      this.setupHall()
    }
  },
  data() {
    return {
      name: '',
      cinemaName: '',
      desc: '',
      scheme: '',
      img: '',
      gallery: {}
    }
  },
  methods: {
    async setupHall() {
      let data = {}
      const cinemasRef = await ref(db, `cinemas/${this.cinemaID}`)
      await onValue(cinemasRef, (snapshot) => {
        this.cinemaName = snapshot.val().title
      })
      const hallRef = await ref(db, `cinemas/${this.cinemaID}/halls/${this.hallID}`)
      await onValue(hallRef, (snapshot) => {
        data = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        data = data.ua
        this.name = data.name
        this.desc = data.description
        this.scheme = data.scheme
        this.img = data.img
        this.gallery = data.gallery
      } else {
        this.name = data.name
        this.desc = data.description
        this.scheme = data.scheme
        this.img = data.img
        this.gallery = data.gallery
      }
    },
    routeSchedule() {
      this.$router.push({
        path: '/schedule',
        query: {
          cinema: this.cinemaName,
          hall: this.name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.halls-page {
  &__inner {
    position: relative;
  }
  &__sidebar {
    position: absolute;
    top: 30px;
    left: 10px;
  }
  &__session-btn {
    margin-top: 30px;
  }
  &__session a {
    border: 1px solid #42b983;
    font-weight: bold;
    color: #2c3e50;
    display: block;
    text-decoration: none;
    padding: 5px;
    text-align: center;
  }
  &__session + &__session a {
    border-top: none;
  }
  &__img {
    width: 100%;
    height: 500px;
  }
  &__block {
    padding: 20px 350px;
    text-align: center;
  }
  &__scheme-title {
    font-size: 30px;
  }
  &__gallery {
    text-align: left;
    margin-top: 30px;
  }
}

</style>