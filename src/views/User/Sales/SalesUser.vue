<template>
  <div class="sales">
    <h2 class="sales__title title">{{ $t('sales.title') }}</h2>
    <div class="sales__items">
      <div class="sales__item" v-for="item in sales" :key="item.id">
        <router-link class="sales__item__inner" v-if="item.actual" :to="'/sales/' + item.id">
          <img class="sales__item-img" :src="item.img" alt="">
          <div class="sales__item-title">{{ item.name }}</div>
          <div class="sales__item-date">{{ item.date }}</div>
          <div class="sales__item-desc">{{ item.description }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "SalesUser",
  mounted() {
    this.setupSales()
  },
  watch: {
    '$i18n.locale'() {
      this.setupSales()
    }
  },
  data() {
    return {
      sales: {}
    }
  },
  methods: {
    async setupSales() {
      const salesRef = await ref(db, 'sales')
      await onValue(salesRef, (snapshot) => {
        this.sales = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.sales).forEach((element) => {
          this.sales[element] = this.sales[element].ua
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales__title {
  margin-bottom: 20px;
}
.sales__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.sales__item {
  max-width: 400px;
  & + & {
    margin-left: 50px;
  }
  &-img {
    width: 400px;
    height: 400px;
  }
  &-title {
    font-size: 25px;
  }
  &-desc {
    margin-top: 10px;
  }
}
</style>