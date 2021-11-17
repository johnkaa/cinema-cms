<template>
  <div class="schedule-cinema">
    <h2 class="schedule-cinema__title title">Выберите кинотеатр</h2>
    <div class="schedule-cinema__cinemas">
      <router-link class="schedule-cinema__item" v-for="(cinema, index) in this.getStateCinemas.database" :key="index" :to="'/admin/schedule/' + cinema.id + '/halls/'">
        <cinemas-item  :cinema="cinema" :add="add"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import CinemasItem from "../../../components/Cinemas/CinemasItem";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ScheduleCinema",
  components: { CinemasItem },
  computed: mapGetters(['getStateCinemas']),
  mounted() {
    this.readCinemasData()
  },
  methods: {
    ...mapMutations(['readCinemasData'])
  }
}
</script>

<style scoped>
.schedule-cinema__cinemas {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>