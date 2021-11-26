<template>
  <div class="registration-cssave">
    <form>
      <h3 class="text-center">Форма входа</h3>
      <div class="form-group">
        <input class="form-control item" type="text" name="email" id="username" placeholder="Почта" required v-model="email">
      </div>
      <div class="form-group">
        <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required v-model="password">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block create-account" type="submit" @click.prevent="submit">Вход в аккаунт</button>
      </div>
      <router-link class="forgot" to="/forgot-password">
        Забыли пароль?
      </router-link>
      <router-link class="forgot" to="/register">
        Регистрация
      </router-link>
    </form>
    <p class="info">Admin: admin@admin.admin, 123456</p>
    <p class="info text-danger" v-if="error">{{ errorMsg }}</p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: '',
    }
  },
  methods: {
    async submit() {
      if(this.email !== '' && this.password !== '') {
        const auth = getAuth()
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password)
        } catch(error) {
          if(error.message === 'Firebase: Error (auth/invalid-email).') {
            this.error = true
            return this.errorMsg = 'Введен неверный эмейл'
          } else if(error.message === 'Firebase: Error (auth/wrong-password).') {
            this.error = true
            return this.errorMsg = 'Введен неверный пароль'
          }
        }
        await this.$router.push({path: '/'})
      } else {
        this.errorMsg = 'Пожалуйста заполните все поля.'
        this.error = true
        setTimeout(() => this.error = false, 3000)
      }
    }
  }
}
</script>

<style scoped>
.registration-cssave{
  padding:50px 0;
}

.registration-cssave form {
  max-width:800px;
  padding:50px 70px;
  border-radius:10px;
  box-shadow:4px 4px 15px rgba(0, 0, 0, 0.2);
  background-color:#fff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.registration-cssave form h3 {
  font-weight:bold;
  margin-bottom:30px;
}

.registration-cssave .item {
  border-radius:10px;
  margin-bottom:25px;
  padding:10px 20px;
}

.registration-cssave .create-account {
  border-radius:30px;
  padding:10px 20px;
  font-size:18px;
  font-weight:bold;
  background-color: #42b983;
  border:none;
  color:white;
  margin-top:20px;
}
.forgot {
  text-align: center;
  display: flex;
  justify-content: center;
  color: #42b983;
}
@media (max-width: 576px) {
  .registration-cssave form {
    padding:50px 20px;
  }
}
</style>
