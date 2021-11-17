<template>
  <div class="cinemas-page">
    <img class="cinemas-page__img" :src="img" alt="">
    <div class="cinemas-page__inner">
      <div class="cinemas-page__sidebar">
        <div class="cinemas-page__halls">
          <p>{{ $t('cinemas.countHalls') }} {{ Object.keys(halls).length }}</p>
          <div class="cinemas-page__hall" v-for="item in halls" :key="item.id">
            <router-link :to="`/cinemas/${id}/halls/${item.id}`">{{ item.name }}</router-link>
          </div>
        </div>
        <div class="cinemas-page__sessions">
          <p>{{ $t('cinemas.now') }}</p>
          <div class="cinemas-page__session" v-for="item in 6" :key="item">
            <router-link to="/">Сеанс {{ item }}</router-link>
          </div>
        </div>
      </div>
      <div class="cinemas-page__block">
        <div class="cinemas-page__top">
          <h4 class="cinemas-page__title">{{ name }}</h4>
          <img class="cinemas-page__logo" :src="logo" alt="">
          <my-button @click="routeSchedule">{{ $t('cinemas.schedule') }}</my-button>
        </div>
        <p class="cinemas-page__desc">{{ desc }}</p>
        <h5 class="cinemas-page__conditions-title">{{ $t('cinemas.conditions') }}</h5>
        <p class="cinemas-page__conditions-text">{{ cond }}</p>
        <gallery-carousel class="cinemas-page__gallery" :slider="gallery"/>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";
import MyButton from "../../../components/UI/MyButton";
import GalleryCarousel from "../../../components/GalleryCarousel";

export default {
  name: "CinemasPage",
  components: {GalleryCarousel, MyButton},
  props: {
    id: Number || String
  },
  mounted() {
    this.setupCinema()
  },
  watch: {
    '$i18n.locale'() {
      this.setupCinema()
    }
  },
  data() {
    return {
      name: '',
      desc: '',
      cond: '',
      logo: '',
      img: '',
      halls: {},
      gallery: {},
      cinemaName: '',
    }
  },
  methods: {
    setupCinema() {
      const cinemasRef = ref(db, `cinemas/${this.id}`)
      onValue(cinemasRef, (snapshot) => {
        this.cinemaName = snapshot.val().title
      })
      if(this.$i18n.locale === 'ua') {
        const cinemaRef = ref(db, `cinemas/${this.id}/ua`)
        onValue(cinemaRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.title
          this.desc = data.description
          this.cond = data.conditions
          this.logo = data.logo
          this.img = data.img
          this.gallery = data.gallery
          this.halls = data.halls
        })
        const hallsRef = ref(db, `cinemas/${this.id}/halls`)
        onValue(hallsRef, (snapshot) => {
          this.halls = snapshot.val()
        })
        Object.keys(this.halls).forEach((item) => {
          this.halls[item] = this.halls[item].ua
        })
      } else {
        const cinemaRef = ref(db, `cinemas/${this.id}`)
        onValue(cinemaRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.title
          this.desc = data.description
          this.cond = data.conditions
          this.logo = data.logo
          this.img = data.img
          this.gallery = data.gallery
          this.halls = data.halls
        })
      }
    },
    routeSchedule() {
      this.$router.push({
        path: '/schedule',
        query: {
          cinema: this.cinemaName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas-page__inner {
  position: relative;
}
.cinemas-page__sidebar {
  position: absolute;
  top: 30px;
  left: 10px;
}
.cinemas-page__sessions {
  margin-top: 40px;
}
.cinemas-page__hall a,
.cinemas-page__session a {
  border: 1px solid #42b983;
  font-weight: bold;
  color: #2c3e50;
  display: block;
  text-decoration: none;
  padding: 5px;
  text-align: center;
}
.cinemas-page__hall + .cinemas-page__hall a {
  border-top: none;
}
.cinemas-page__session + .cinemas-page__session a {
  border-top: none;
}
.cinemas-page {
  &__img {
    width: 100%;
    height: 500px;
  }
  &__block {
    padding: 20px 350px;
    text-align: center;
  }
  &__top {
    display: flex;
    align-items: center;
  }
}
.cinemas-page__logo {
  width: 200px;
  height: 200px;
  margin: 30px;
}
.cinemas-page__conditions-title {
  font-size: 30px;
  margin-top: 30px;
}
.cinemas-page__gallery {
  text-align: left;
}
</style>