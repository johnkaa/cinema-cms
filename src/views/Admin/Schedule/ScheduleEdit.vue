<template>
  <div class="schedule-edit">
    <div class="schedule-edit__items">
      <div class="schedule-edit__item">
        <span>Выберите время: </span><input type="time" v-model="time">
      </div>
      <div class="schedule-edit__item">
        <span>Выберите дату: </span><input type="date" v-model="date" :min="date">
      </div>
      <div class="schedule-edit__item">
        <span>Введите цену за билет: </span><input type="number" v-model="price">
      </div>
      <div class="schedule-edit__item">
        <my-button class="schedule-edit__item-btn" @click="submit">Сохранить</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";
export default {
  name: "ScheduleEdit",
  components: {MyButton},
  mounted() {
    const scheduleRef = ref(db, `cinemas/${this.cinemasID}/halls/${this.hallsID}/schedule/${this.filmsID}`)
    onValue(scheduleRef, (snapshot) => {
      if(!snapshot.val()) {
        return
      }
      const data = snapshot.val()
      this.time = data.time
      this.date = data.date.split('.').reverse().join('-')
      this.price = data.price
    })
    const filmRef = ref(db, `films/filmsNow/${this.filmsID}`)
    onValue(filmRef, (snapshot) => {
      this.film = snapshot.val().title
      this.ua = this.film
    })
    const cinemaRef = ref(db, `cinemas/${this.cinemasID}`)
    onValue(cinemaRef, (snapshot) => {
      this.cinema = snapshot.val().title
    })
    const hallRef = ref(db, `cinemas/${this.cinemasID}/halls/${this.hallsID}`)
    onValue(hallRef, (snapshot) => {
      this.hall = snapshot.val().name
    })
    const dateObj = new Date()
    if(dateObj.getDate() < 10) {
      this.date = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + '0' + dateObj.getDate()
    } else {
      this.date = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate()
    }
  },
  props: {
    cinemasID: Number || String,
    hallsID: Number || String,
    filmsID: Number || String,
  },
  data() {
    return {
      time: '10:00',
      date: '2021-10-30',
      price: '100',
      film: '',
      cinema: '',
      hall: '',
    }
  },
  methods: {
    submit() {
      set(ref(db, `schedule/${(+new Date()-(+new Date()%100)) / 100}`), {
        id: (+new Date()-(+new Date()%100)) / 100,
        film: this.film,
        time: this.time,
        date: this.date.split('-').reverse().join('.'),
        price: this.price,
        cinema: this.cinema,
        hall: this.hall
      })
      this.$router.push({
        path: '/admin/schedule'
      })
    }
  }
}
</script>

<style scoped>
.schedule-edit {
  display: flex;
  justify-content: center;
}
.schedule-edit__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.schedule-edit__item span {
  margin-right: 20px;
}
.schedule-edit__item input[type=number] {
  width: 70px;
}
.schedule-edit__item + .schedule-edit__item {
  margin-top: 20px;
}
.schedule-edit__item-btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>