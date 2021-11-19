<template>
  <div>
    <Header></Header>
    <nav id="nav">
      <router-link :to="{ name: 'Stats' }">Статистика</router-link>
      <router-link :to="{ name: 'Banners' }">Баннеры/Слайдеры</router-link>
      <router-link :to="{ name: 'Films' }">Фильмы</router-link>
      <router-link :to="{ name: 'Cinemas' }">Кинотеатры</router-link>
      <router-link :to="{ name: 'ScheduleCinema' }">Расписание</router-link>
      <router-link :to="{ name: 'News' }">Новости</router-link>
      <router-link :to="{ name: 'Sales' }">Акции</router-link>
      <router-link :to="{ name: 'Pages' }">Страницы</router-link>
      <router-link :to="{ name: 'Users' }">Пользователи</router-link>
      <router-link :to="{ name: 'Mailing' }">Рассылка</router-link>
    </nav>
    <router-view class="wrapper"/>
  </div>
</template>

<script>
import Header from "../Header";
import {mapMutations} from "vuex";

export default {
  name: "AdminLayout",
  components: {Header},
  mounted() {
    this.getUser()
  },
  methods: {
    ...mapMutations(['getUser'])
  }
}
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  border: 1px solid #000;
  z-index: 1000;
  left: 5px;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    text-align: left;
    text-decoration: none;
    padding: 5px;
    &.router-link-exact-active {
       background-color: rgba(#42b983, 0.2);
       color: #42b983;
     }
  }
}
.wrapper {
  padding-left: 200px;
  padding-right: 50px;
}
</style>