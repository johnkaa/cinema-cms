<template>
  <div class="poster-soon__items poster-films__items">
    <div class="poster-soon__item poster-films__item" v-for="item in filmsSoon" :key="item.id">
      <div class="poster-soon__type poster-films__type">
        <div class="type" v-if="item.type.type2D">2D</div>
        <div class="type" v-if="item.type.type3D">3D</div>
        <div class="type" v-if="item.type.typeIMAX">IMAX</div>
      </div>
      <p class="poster-soon__date poster-films__date">С {{ dateSoon }}</p>
      <router-link :to="'/films/soon/' + item.id">
        <img :src="item.img" alt="">
        <p class="poster-soon__name poster-films__name">{{ item.title }}</p>
      </router-link>
      <my-button class="poster-soon__btn poster-films__btn">{{ $t('poster.buy') }}</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "PosterSoon",
  components: {MyButton},
  mounted() {
    this.setupPosterSoon()
  },
  watch: {
    '$i18n.locale'() {
      this.setupPosterSoon()
    }
  },
  data() {
    return {
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      monthsUA: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтеня', 'Листопада', 'Грудня'],
      dateSoon: '',
      filmsSoon: {},
    }
  },
  methods: {
    async setupPosterSoon() {
      const dateObj = new Date()
      this.date = dateObj.getDate() + ' ' +  this.months[(dateObj.getMonth())]
      this.dateSoon = '1 ' + this.months[(dateObj.getMonth() + 1)]
      const filmsSoonRef = await ref(db, 'films/filmsSoon')
      await onValue(filmsSoonRef, (snapshot) => {
        this.filmsSoon = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        this.date = dateObj.getDate() + ' ' +  this.monthsUA[(dateObj.getMonth())]
        this.dateSoon = '1 ' + this.monthsUA[(dateObj.getMonth() + 1)]
        Object.keys(this.filmsSoon).forEach((element) => {
          this.filmsSoon[element] = this.filmsSoon[element].ua
        })
      }
    }
  }
}
</script>