<template>
  <div class="cinemas__item">
    <my-close-button @click.prevent="deleteCinemaItem" v-if="add"/>
    <img :src="cinema.img" alt="">
    <p class="cinemas__item-name title">{{ cinema.title }}</p>
  </div>
</template>

<script>
import MyCloseButton from "../UI/MyCloseButton";
import {ref, set} from "firebase/database";
import db from "../../firebase/database";
import {mapMutations} from "vuex";

export default {
  name: "CinemasItem",
  components: {
    MyCloseButton
  },
  props: {
    cinema: Object,
    add: Boolean
  },
  methods: {
    ...mapMutations(['deleteCinemaItemStorage']),
    deleteCinemaItem() {
      set(ref(db, `cinemas/${this.cinema.id}`), {
        id: null,
        title: null,
        description: null,
        conditions: null,
        img: null,
        gallery: null,
        halls: null,
        seo: null,
      })
      this.deleteCinemaItemStorage(this.cinema.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas__item {
  cursor: pointer;
  position: relative;
  img {
    height: 400px;
    width: 400px;
  }
  &-name {
    font-weight: 500;
    font-size: 25px;
  }
}
</style>