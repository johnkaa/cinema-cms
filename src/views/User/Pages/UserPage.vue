<template>
  <div class="page">
    <img class="page__img" :src="page.img" alt="">
    <div class="page__inner">
      <div class="page__block">
        <h4 class="page__title">{{ page.name }}</h4>
        <p class="page__desc">{{ page.description }}</p>
        <h4 class="page__title">Фотогалерея</h4>
        <gallery-carousel class="page__gallery" :slider="page.gallery"/>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";
import GalleryCarousel from "../../../components/GalleryCarousel";

export default {
  name: "UserPage",
  components: {GalleryCarousel},
  props: {
    id: String
  },
  data() {
    return {
      page: {}
    }
  },
  mounted() {
    this.setupPage()
  },
  watch: {
    '$i18n.locale'() {
      this.setupPage()
    },
    '$route.path'() {
      setTimeout(() => {
        this.setupPage()
      }, 200)
    }
  },
  methods: {
    async setupPage() {
      const cinemaRef = await ref(db, `pages/${this.id}`)
      await onValue(cinemaRef, (snapshot) => {
        this.page = snapshot.val()
      })
      if (this.$i18n.locale === 'ua') {
        const cinemaRef = await ref(db, `pages/${this.id}/ua`)
        await onValue(cinemaRef, (snapshot) => {
          this.page = snapshot.val()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__img {
    width: 100%;
    height: 500px;
  }

  &__block {
    padding: 20px 350px;
  }

  &__title {
    margin-bottom: 30px;
    font-size: 30px;
    text-align: center;
  }
}
</style>