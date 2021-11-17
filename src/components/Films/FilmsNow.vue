<template>
  <div>
    <div class="films__items">
      <router-link class="films__item" v-for="(film, index) in this.getStateFilmsNow.database" :key="index" :to="'/admin/films-editor/now/' + film.id" :film="film">
        <films-item :film="film"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import FilmsItem from "./FilmsItem";
import { mapGetters } from "vuex"

export default {
  name: "FilmsNow",
  computed: mapGetters(["getStateFilmsNow"]),
  components: { FilmsItem }
}
</script>

<style scoped>
.films__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>