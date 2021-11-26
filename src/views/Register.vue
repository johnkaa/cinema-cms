<template>
  <div class="registration-cssave">
    <form>
      <h3 class="text-center">Форма регистрации</h3>
      <div class="form">
        <div class="form-item">
          <div class="form-group">
            <input class="form-control item" type="text" name="email" id="email" placeholder="Почта" required v-model="email">
          </div>
          <div class="form-group">
            <input class="form-control item" type="text" name="text" id="name" placeholder="Имя" required v-model="name">
          </div>
          <div class="form-group">
            <input class="form-control item" type="text" name="text" id="nickname" placeholder="Псевдоним" required v-model="nickname">
          </div>
          <div class="form-group">
            <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required v-model="password">
          </div>
          <div class="form-group">
            <input class="form-control item" type="text" name="text" id="card" placeholder="Номер карты" required v-model="card">
          </div>
        </div>
        <div class="form-item">
          <div class="users-edit__item form-group">
            <span>Язык</span>
            <div class="language__select select">
              <input name="language-select" id="ru" type="radio" value="ru" v-model="language">
              <label for="ru">Русский</label>
            </div>
            <div class="language__select select">
              <input name="language-select" id="ua" type="radio" value="ua" v-model="language">
              <label for="ua">Украинский</label>
            </div>
          </div>
          <div class="users-edit__item form-group">
            <span>Пол</span>
            <div class="gender__select select">
              <input name="gender-select" id="male" type="radio" value="male" v-model="gender">
              <label for="male">Мужской</label>
            </div>
            <div class="gender__select select">
              <input name="gender-select" id="female" type="radio" value="female" v-model="gender">
              <label for="female">Женский</label>
            </div>
          </div>
          <div class="users-edit__item form-group">
            <span>Телефон</span>
            <input type="text" placeholder="Телефон" v-model="phone">
          </div>
          <div class="users-edit__item form-group">
            <span>Дата рождения</span>
            <input type="date" v-model="birthday" min="1960-01-01" max="2000-12-31">
          </div>
          <div class="users-edit__item form-group">
            <span>Город</span>
            <select v-model="city">
              <option disabled value="">Выберите город</option>
              <option value="Киев">Киев</option>
              <option value="Львов">Львов</option>
              <option value="Одесса">Одесса</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block create-account" type="submit" @click.prevent="submit">Регистрация</button>
      </div>
      <router-link class="forgot" to="/login">
        Уже есть аккаунт?
      </router-link>
    </form>
    <p class="info text-danger" v-if="error">Пожалуйста заполните все поля</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {mapGetters} from "vuex";
import {ref, set} from "firebase/database";
import db from "../firebase/database";

const dateObj = new Date()
export default {
  name: "Register",
  computed: mapGetters(['getStateUsers']),
  mounted() {
    setTimeout(() => this.id = Object.keys(this.getStateUsers.database).length,500)
  },
  data() {
    return {
      id: '',
      email: '',
      name: '',
      nickname: '',
      password: '',
      card: '',
      city: '',
      phone: '',
      birthday: '',
      gender: '',
      language: '',
      uid: '',
      user: 'user',
      registration: dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear(),
      error: false
    }
  },
  methods: {
    async submit() {
      if(
          this.email !== '' ||
          this.name !== '' ||
          this.nickname !== '' ||
          this.password !== '' ||
          this.card !== '' ||
          this.city !== '' ||
          this.birthday !== '' ||
          this.gender !== '' ||
          this.language !== ''){
        let birthday = this.birthday.split('-').reverse().join('.')
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              this.uid = userCredential.user.uid
            })
        set(ref(db, `users/${this.id}`), {
          id: this.id,
          email: this.email,
          name: this.name,
          nickname: this.nickname,
          password: this.password,
          card: this.card,
          city: this.city,
          phone: this.phone,
          birthday: birthday,
          gender: this.gender,
          language: this.language,
          user: this.user,
          uid: this.uid,
          registration: this.registration,
        })
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

<style lang="scss" scoped>
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
.form {
  display: flex;
  justify-content: space-between;
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
.users-edit__item {
  display: flex;
  align-items: center;
  span {
    margin-right: 15px;
    width: 120px;
    display: block;
  }
  & + & {
    margin-top: 15px;
  }
}
.select {
  margin-right: 15px;
  input {
    margin-right: 5px;
  }
}
@media (max-width: 576px) {
  .registration-cssave form {
    padding:50px 20px;
  }
}
</style>
