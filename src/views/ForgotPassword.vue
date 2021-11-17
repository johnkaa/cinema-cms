<template>
  <div class="registration-cssave">
    <form>
      <h3 class="text-center">Восстановление пароля</h3>
      <div class="form-group">
        <input class="form-control item" type="text" name="email" id="username" placeholder="Почта" required v-model="email">
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block create-account" type="submit" @click.prevent="submit">Восстановить пароль</button>
      </div>
      <router-link class="forgot" to="/login">
        Назад
      </router-link>
    </form>
    <p class="info text-danger" v-if="error">Пожалуйста укажите почту</p>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: '',
      error: false
    }
  },
  methods: {
    async submit() {
      if(this.email !== '') {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, this.email)
        await this.$router.push({
          path: '/login'
        })
      } else {
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