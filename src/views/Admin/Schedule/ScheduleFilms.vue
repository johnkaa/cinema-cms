<template>
  <div class="schedule-films">
    <h2 class="schedule-films__title title">Выберите фильм</h2>
    <div class="schedule-films__items">
      <router-link class="schedule-films__item" v-for="film in films" :key="film.id" :to="'/admin/schedule/' + cinemasID + '/halls/' + hallsID + '/films/' + film.id">
        <img class="schedule-films__item-img" :src="film.img" alt="">
        <p class="schedule-films__item-text">{{ film.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "ScheduleFilms",
  props: {
    cinemasID: Number || String,
    hallsID: Number || String
  },
  mounted() {
    const FilmsRef = ref(db, `films/filmsNow`)
    onValue(FilmsRef, (snapshot) => {
      this.films = snapshot.val()
    })
  },
  data() {
    return {
      films: {}
    }
  },
}
</script>

<style lang="scss" scoped>
.schedule-films__items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.schedule-films__item {
  cursor: pointer;
  img {
    height: 400px;
    width: 400px;
  }
  &-text {
    text-align: center;
    font-weight: 600;
    margin-top: 5px;
  }
  & + & {
    margin-left: 20px;
  }
}
</style>