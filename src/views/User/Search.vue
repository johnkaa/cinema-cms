<template>
  <div class="search">
    <div class="search__items">
      <div class="search__item" v-for="(item, index) in filmsByName" :key="index" @click="routeFilm(item, index)">
        <img class="search__item-img" :src="item.img" alt="">
        <p class="search__item-name">{{ item.title }}</p>
      </div>
    </div>
    <div class="search__not-found info text-danger" v-if="Object.keys(filmsByName).length === 0">Фильмов не найдено</div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";

export default {
  name: "Search",
  computed: {
    filmsByName() {
      let result = []
      Object.keys(this.filmsNow).forEach((item) => {
        result.push(this.filmsNow[item])
      })
      Object.keys(this.filmsSoon).forEach((item) => {
        result.push(this.filmsSoon[item])
      })
      return result.filter(element => {
        return element.title.toLowerCase().includes(this.$route.query.searchField.toLocaleLowerCase())
      })
    },
  },
  mounted() {
    this.setupSearchItems()
  },
  watch: {
    '$i18n.locale'() {
      this.setupSearchItems()
    },
    '$route.query.searchField'() {
      this.setupSearchItems()
    }
  },
  data() {
    return {
      filmsNow: {},
      filmsSoon: {},
    }
  },
  methods: {
    setupSearchItems() {
      this.filmsByName = {}
      const filmsRef = ref(db, 'films')
      onValue(filmsRef, (snapshot) => {
        this.filmsNow = snapshot.val().filmsNow
        this.filmsSoon = snapshot.val().filmsSoon
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.filmsNow).forEach((item) => {
          this.filmsNow[item] = this.filmsNow[item].ua
        })
        Object.keys(this.filmsSoon).forEach((item) => {
          this.filmsSoon[item] = this.filmsSoon[item].ua
        })
      }
    },
    routeFilm(item) {
      if(!item.soon) {
        this.$router.push({
          path: `/films/now/${item.id}`
        })
      } else {
        this.$router.push({
          path: `/films/soon/${item.id}`
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 50px 0;
  &__title {
    margin-bottom: 0;
  }
}
.search__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.search__item {
  margin-top: 20px;
  cursor: pointer;
  &-img {
    height: 400px;
    width: 400px;
  }
  &-name {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 5px;
  }
  & + & {
    margin-left: 20px;
  }
}
.search__not-found {
  font-size: 50px;
}
</style>