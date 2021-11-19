<template>
  <header class="header">
    <router-link class="logo" to="/"><img class="logo__img" src="../assets/logo.webp" alt=""></router-link>
    <div class="header__btns" v-if="this.getStateAuth.auth">
      <router-link to="/" @click="logout">
        <a class="header__quit" href="/"><span class="iconify" data-icon="ls:logout"></span></a>
      </router-link>
    </div>
    <div class="header__btns" v-if="!this.getStateAuth.auth">
      <router-link class="header__btn" to="/login">
        <my-button>Логин</my-button>
      </router-link>
      <router-link class="header__btn" to="/register">
        <my-button>Регистрация</my-button>
      </router-link>
    </div>
  </header>
</template>

<script>
import MyButton from "./UI/MyButton";
import {mapGetters} from "vuex";
import {getAuth, signOut} from "firebase/auth";


export default {
  name: "Header",
  components: {MyButton},
  computed: mapGetters(['getStateAuth']),
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 30px;
    border-bottom: 3px solid #42b983;
  }
  .logo__img {
    width: 80px;
  }
  .header__btns {
    display: flex;
  }
  .header__btn + .header__btn {
    margin-left: 15px;
  }
  .header__quit {
    font-size: 30px;
  }
</style>