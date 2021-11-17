<template>
  <div class="cinemas">
    <div class="cinemas__items">
      <router-link class="cinemas__item" v-for="cinema in this.getStateCinemas.database" :key="cinema.id" :to="'/admin/cinemas-edit/' + cinema.id">
        <cinemas-item  :cinema="cinema" :add="add"/>
      </router-link>
      <router-link :to="'/admin/cinemas-edit/' + (+new Date()-(+new Date()%100)) / 100">
        <cinemas-add />
      </router-link>
    </div>
  </div>
</template>

<script>
import CinemasItem from "./CinemasItem";
import CinemasAdd from "./CinemasAdd";
import {mapGetters} from "vuex";

export default {
  name: "CinemasList",
  components: {
    CinemasItem,
    CinemasAdd
  },
  props: {
    add: Boolean
  },
  computed: mapGetters(['getStateCinemas']),
  methods: {
    cinemaRoute(id) {
      if(this.add) {
        this.$router.push({
          path: '/admin/cinemas-edit/' + id
        })
      } else {
        this.$router.push({
          path: '/admin/schedule/' + id + '/halls'
        })
      }
    }
  }
}
</script>

<style scoped>
.cinemas__items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>