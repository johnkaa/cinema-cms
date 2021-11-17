<template>
  <div class="films">
    <h2 class="title">Список текущих фильмов</h2>
    <films-now />
    <films-soon />
  </div>
</template>

<script>

import FilmsNow from "../../../components/Films/FilmsNow";
import FilmsSoon from "../../../components/Films/FilmsSoon";
import {mapMutations} from "vuex";

export default {
  name: "Films",
  components: {
    FilmsNow,
    FilmsSoon
  },
  mounted() {
    this.setupFilms()
  },
  methods: {
    ...mapMutations(['readFilmsNowData', 'readFilmSoonData']),
    setupFilms() {
      this.readFilmsNowData()
      this.readFilmSoonData()
    }
  }
}
</script>