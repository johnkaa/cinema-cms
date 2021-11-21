<template>
  <div class="poster-now__items poster-films__items">
    <div class="poster-now__item poster-films__item" v-for="item in filmsNow" :key="item.id">
      <div class="poster-now__type poster-films__type">
        <div class="type" v-if="item.type.type2D">2D</div>
        <div class="type" v-if="item.type.type3D">3D</div>
        <div class="type" v-if="item.type.typeIMAX">IMAX</div>
      </div>
      <p class="poster-now__date poster-films__date">{{ $t('poster.now') }}</p>
      <router-link :to="'/films/now/' + item.id">
        <img :src="item.img" alt="">
        <p class="poster-now__name poster-films__name">{{ item.title }}</p>
      </router-link>
      <my-button class="poster-now__btn poster-films__btn">{{ $t('poster.buy') }}</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "PosterNow",
  components: {MyButton},
  mounted() {
    this.setupPosterNow()
  },
  watch: {
    '$i18n.locale'() {
      this.setupPosterNow()
    }
  },
  data() {
    return {
      filmsNow: {}
    }
  },
  methods: {
    async setupPosterNow() {
      const filmsNowRef = await ref(db, 'films/filmsNow')
      await onValue(filmsNowRef, (snapshot) => {
        this.filmsNow = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.filmsNow).forEach((element) => {
          this.filmsNow[element] = this.filmsNow[element].ua
        })
      }
    }
  }
}
</script>