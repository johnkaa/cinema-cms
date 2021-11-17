<template>
  <div class="cinemas">
    <h2 class="cinemas__title title">Список кинотеатров</h2>
    <cinemas-list :add="true"/>
  </div>
</template>

<script>
import CinemasList from "../../../components/Cinemas/CinemasList";
import {mapGetters, mapMutations} from "vuex"

export default {
  name: "Cinemas",
  components: {
    CinemasList
  },
  computed: mapGetters(['getStateCinemasHalls']),
  mounted() {
    this.readCinemasData()
    setTimeout(() => this.getStateCinemasHalls.halls = {}, 200)
  },
  methods: {
    ...mapMutations(['readCinemasData']),
  }
}
</script>

<style scoped>

</style>