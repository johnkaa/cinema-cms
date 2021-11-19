<template>
  <div class="sales-page">
    <h4 class="sales-page__title">{{ name }}</h4>
    <div class="sales-page__inner">
      <div class="sales-page__img">
        <img :src="img" alt="">
      </div>
      <div class="sales-page__info">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "SalesPage",
  props: {
    id: Number || String
  },
  mounted() {
    this.setupSalesPage()
  },
  watch: {
    '$i18n.locale'() {
      this.setupSalesPage()
    }
  },
  data() {
    return {
      name: '',
      img: '',
      desc: ''
    }
  },
  methods: {
    async setupSalesPage() {
      console.log('setup')
      if (this.$i18n.locale === 'ua') {
        const salesRef = await ref(db, `sales/${this.id}/ua`)
        await onValue(salesRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.name
          this.desc = data.description
          this.scheme = data.scheme
          this.img = data.img
          this.gallery = data.gallery
        })
      } else {
        const salesRef = await ref(db, `sales/${this.id}`)
        await onValue(salesRef, (snapshot) => {
          const data = snapshot.val()
          this.name = data.name
          this.desc = data.description
          this.scheme = data.scheme
          this.img = data.img
          this.gallery = data.gallery
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-page {
  padding: 50px 0;
  max-width: 1500px;
  margin: 0 auto;

  &__title {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__inner {
    display: flex;
  }

  &__img img {
    width: 500px;
    height: 500px;
  }

  &__info {
    max-width: 600px;
    margin-left: 20px;
  }
}
</style>