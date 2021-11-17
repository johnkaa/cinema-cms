<template>
  <div class="schedule-halls">
    <h2 class="schedule-halls__title title">Выберите зал</h2>
    <div class="schedule-halls__items">
      <div class="schedule-halls__item" v-for="item in this.halls" :key="item.id" @click="hallsRoute(item.id)">
        <div class="cinemas__item">
          <img :src="item.img" alt="">
          <p class="cinemas__item-name title">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "ScheduleHalls",
  props: {
    id: Number || String
  },
  mounted() {
    const cinemasHallsRef = ref(db, `cinemas/${this.id}/halls`)
    onValue(cinemasHallsRef, (snapshot) => {
      this.halls = snapshot.val()
    })
  },
  data() {
    return {
      halls: {}
    }
  },
  methods: {
    hallsRoute(id) {
      this.$router.push({
        path: '/admin/schedule/' + this.id + '/halls/' + id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule-halls__items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.schedule-halls__item {
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