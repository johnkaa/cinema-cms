<template>
  <div class="film">
    <iframe v-if="url" width="100%" height="750px" :src="`https://www.youtube.com/embed/${url.substring(17)}?controls=0`" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="film__schedule" v-if="!soon">
      <div class="film__schedule-top">
        <div class="film__schedule-title">{{ $t('film.schedule') }}</div>
        <select class="film__schedule-select" v-model="cinemas">
          <option value="all">{{ $t('schedule.cinemas') }}</option>
          <option v-for="item in this.getStateCinemas.database" :key="item.id" :value="item.title">{{ item.title }}</option>
        </select>
      </div>
      <div class="film__schedule-items">
        <div class="film__schedule-item" v-for="item in filteredItems" :key="item.id" @click="routeFilm(item.id)">
          <div v-if="$i18n.locale === 'ua'" class="film__schedule-item-date">{{ item.numberOfDay }} {{ monthsUA[(item.date.split('.')[1]) - 1] }}</div>
          <div v-else class="film__schedule-item-date">{{ item.numberOfDay }} {{ months[(item.date.split('.')[1]) - 1] }}</div>
          <div class="film__schedule-item-day">{{ item.day }}</div>
          <div class="film__schedule-item-cinema">{{ $t('film.cinema') }} {{ item.cinema }}</div>
          <div class="film__schedule-item-bottom">
            <div class="film__schedule-item-time">{{ item.time }}</div>
            <div class="film__schedule-item-hall">{{ item.hall }}</div>
          </div>
        </div>
      </div>
      <div class="film__schedule-not-found info text-danger" v-if="!Object.keys(filteredItems).length">{{ $t('schedule.not-found') }}</div>
    </div>
    <div class="films__soon info text-success" v-else>Скоро появится в прокате</div>
    <div class="film__inner">
      <img class="film__img" :src="img" alt="">
      <div class="film__info">
        <my-button class="film__btn" v-if="!soon">{{ $t('film.buy') }}</my-button>
        <h4 class="film__title">{{ name }}</h4>
        <p class="film__desc">{{ desc }}</p>
        <div class="film__title">{{ $t('film.posters') }}</div>
        <gallery-carousel id="film__gallery" :slider="gallery"/>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";
import MyButton from "../../components/UI/MyButton";
import GalleryCarousel from "../../components/GalleryCarousel";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FilmPage",
  components: {GalleryCarousel, MyButton},
  computed: {
    ...mapGetters(['getStateCinemas']),
    filteredItems() {
      let items = this.schedule
      if(this.cinemas !== 'all') {
        Object.keys(items).forEach((item) => {
          if(items[item].cinema !== this.cinemas) {
            delete items[item]
          }
        })
      }
      return items
    }
  },
  props: {
    id: Number || String,
    actual: String,
  },
  data() {
    return {
      name: '',
      desc: '',
      url: '',
      img: '',
      gallery: {},
      schedule: {},
      cinemas: 'all',
      days: ['Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг'],
      daysUA: ['Пятница', 'Субота', 'Неділя', 'Понеділок', 'Вівторок', 'Среда', 'Четвер'],
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      monthsUA: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтеня', 'Листопада', 'Грудня'],
      soon: false
    }
  },
  mounted() {
    this.setupFilm()
    this.readCinemasData()
  },
  watch: {
    '$i18n.locale'() {
      this.setupFilm()
    },
    cinemas() {
      this.setupFilm()
    }
  },
  methods: {
    ...mapMutations(['readCinemasData']),
    async setupFilm() {
      const actual = this.actual[0].toUpperCase() + this.actual.slice(1)
      if(this.$i18n.locale === 'ua') {
        const filmRef = await ref(db, `films/films${actual}/${this.id}/ua`)
        await onValue(filmRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.title
          this.desc = data.description
          this.url = data.link
          this.img = data.img
          this.gallery = data.gallery
          this.soon = data.soon
        })
      } else {
        const filmRef = await ref(db, `films/films${actual}/${this.id}`)
        await onValue(filmRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.title
          this.desc = data.description
          this.url = data.link
          this.img = data.img
          this.gallery = data.gallery
          this.soon = data.soon
        })
      }
      if(this.$i18n.locale === 'ua') {
        const scheduleRef = await ref(db, 'schedule')
        await onValue(scheduleRef, (snapshot) => {
          const data = snapshot.val()
          Object.keys(data).forEach((item) => {
            if(data[item].film === this.name) {
              this.schedule[item] = data[item]
              const dateArray = data[item].date.split('.')
              this.schedule[item].day = this.daysUA[new Date(dateArray[2], dateArray[1], dateArray[0]).getDay()]
              this.schedule[item].numberOfDay = dateArray[0]
              this.schedule[item].month = this.monthsUA[new Date(dateArray[2], dateArray[1], dateArray[0]).getMonth() - 1]
            }
          })
        })
      } else {
        const scheduleRef = await ref(db, 'schedule')
        await onValue(scheduleRef, (snapshot) => {
          const data = snapshot.val()
          Object.keys(data).forEach((item) => {
            if(data[item].film === this.name) {
              this.schedule[item] = data[item]
              const dateArray = data[item].date.split('.')
              this.schedule[item].day = this.days[new Date(dateArray[2], dateArray[1], dateArray[0]).getDay()]
              this.schedule[item].numberOfDay = dateArray[0]
              this.schedule[item].month = this.months[new Date(dateArray[2], dateArray[1], dateArray[0]).getMonth() - 1]
            }
          })
        })
      }
    },
    routeFilm(id) {
      this.$router.push({
        path: `/order/${id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.film__inner {
  display: flex;
  justify-content: space-around;
  padding: 50px 100px;
}
.film__schedule {
  padding: 50px 100px 0;
  &-top {
    display: flex;
    justify-content: center;
  }
  &-select {
    width: 200px;
    margin-left: 50px;
  }
  &-title {
    font-size: 30px;
  }
  &-items {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  &-item {
    border: 1px solid #42b983;
    padding: 16px;
    cursor: pointer;
    &-date {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 5px;
    }
    &-day {
      font-weight: 700;
      text-align: center;
      margin-bottom: 10px;
    }
    &-cinema {
      text-align: center;
    }
    &-bottom {
      display: flex;
      justify-content: center;
    }
    &-hall {
      margin-left: 10px;
    }
  }
  &-item + &-item  {
    margin-left: 20px;
  }
}
.film__img {
  max-width: 800px;
  height: 500px;
}
.film__info {
  max-width: 500px;
  text-align: center;
}
.film__title {
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
}
#film__gallery {
  text-align: left;
}
</style>