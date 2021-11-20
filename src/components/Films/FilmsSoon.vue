<template>
  <div>
    <h2 class="title">Список фильмов которые покажут скоро</h2>
    <div class="films__items">
      <router-link class="films__item" v-for="(film, index) in this.getStateFilmsSoon.database" :key="index" :to="'/admin/films-editor/soon/' + film.id" :film="film">
        <films-item :film="film" :soon="true"/>
      </router-link>
      <router-link class="films__item plus" :to="`/admin/films-editor/soon/${(+new Date()-(+new Date()%100)) / 100}`">+</router-link>
    </div>
  </div>
</template>

<script>
import FilmsItem from "./FilmsItem";
import { mapGetters } from "vuex"

export default {
  name: "FilmsNow",
  computed: mapGetters(["getStateFilmsSoon"]),
  components: { FilmsItem }
}
</script>

<style scoped lang="scss">
.films__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.films__item + .films__item {
  margin-left: 20px;
}
.plus {
  color: #42b983;
  cursor: pointer;
  height: 200px;
  width: 150px;
  font-weight: 700;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #42b983;
  border-radius: 10px 20px 30px 40px/30px;
  transition: all .3s;
  overflow: hidden;
  margin: auto 0;
  &:hover {
     background-color: rgba(#42b983, .1);
   }
}
</style>