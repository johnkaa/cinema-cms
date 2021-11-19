<template>
  <div class="news">
    <h2 class="news__title title">{{ $t('news.title') }}</h2>
    <div class="news__items">
      <div class="news__item" v-for="item in news" :key="item.id">
        <div class="news__item-inner" v-if="item.actual">
          <img class="news__item-img" :src="item.img" alt="">
          <div class="news__item-title">{{ item.name }}</div>
          <div class="news__item-date">{{ item.date }}</div>
          <div class="news__item-desc">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "NewsUser",
  mounted() {
    this.setupNews()
  },
  watch: {
    '$i18n.locale'() {
      this.setupNews()
    }
  },
  data() {
    return {
      news: {}
    }
  },
  methods: {
    async setupNews() {
      const newsRef = await ref(db, 'news')
      await onValue(newsRef, (snapshot) => {
        this.news = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.news).forEach((element) => {
          this.news[element] = this.news[element].ua
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news__title {
  margin-bottom: 20px;
}
.news__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.news__item {
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
    word-wrap: break-word;
  }
}
</style>