<template>
  <div class="films__item">
    <my-close-button @click.prevent="deleteFilmItem"/>
    <img class="films__item-img" :src="film.img" alt="">
    <p class="films__item-text">{{ film.title }}</p>
  </div>
</template>

<script>
import MyCloseButton from "@/components/UI/MyCloseButton";
import {ref, set} from "firebase/database";
import db from "@/firebase/database";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FilmsItem",
  components: {MyCloseButton},
  computed: mapGetters(['getStateFilmsNow', "getStateFilmsSoon"]),
  props: {
    film: Object,
    soon: Boolean
  },
  methods: {
    ...mapMutations(['deleteFileFilmImg']),
    deleteFilmItem() {
      let path = ''
      if(this.soon) {
        if(Object.keys(this.getStateFilmsSoon.database).length === 1) {
          return alert('Должен быть хотя бы 1 фильм')
        }
        path = `films/filmsSoon/${this.film.id}`
      } else {
        if(Object.keys(this.getStateFilmsNow.database).length === 1) {
          return alert('Должен быть хотя бы 1 фильм')
        }
        path = `films/filmsNow/${this.film.id}`
      }
      set(ref(db, path), {
        id: null,
        title: null,
        description: null,
        img: null,
        gallery: null,
        type: null,
        link: null,
        seo: null,
        ua: null
      })
      this.deleteFileFilmImg({
        id: this.film.id,
        path: path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.films__item {
  cursor: pointer;
  position: relative;
  img {
    height: 400px;
    width: 400px;
  }
  &-text {
    text-align: center;
    font-weight: 600;
    margin-top: 5px;
  }
}
</style>