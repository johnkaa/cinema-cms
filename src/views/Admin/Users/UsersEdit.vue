<template>
  <div>
    <div class="users-edit">
      <div class="users-edit__items">
        <div class="users-edit__item">
          <span>Имя</span>
          <input type="text" placeholder="Имя" v-model="name">
        </div>
        <div class="users-edit__item">
          <span>Псевдоним</span>
          <input type="text" placeholder="Псевдоним" v-model="nickname">
        </div>
        <div class="users-edit__item">
          <span>E-mail</span>
          <input type="text" placeholder="E-mail" v-model="email">
        </div>
        <div class="users-edit__item">
          <span>Пароль</span>
          <input type="password" placeholder="Пароль" v-model="password">
        </div>
        <div class="users-edit__item">
          <span>Номер карты</span>
          <input type="text" placeholder="Номер карты" v-model="card">
        </div>
      </div>
      <div class="users-edit__items">
        <div class="users-edit__item">
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
        <div class="users-edit__item">
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
        <div class="users-edit__item">
          <span>Телефон</span>
          <input type="text" placeholder="Телефон" v-model="phone">
        </div>
        <div class="users-edit__item">
          <span>Дата рождения</span>
          <input type="date" v-model="birthday" min="1960-01-01" max="2000-12-31">
        </div>
        <div class="users-edit__item">
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
    <router-link to="/admin/users">
      <my-button class="users-edit__btn" @click="submit">Сохранить</my-button>
    </router-link>
  </div>
</template>

<script>
import {onValue, ref, set} from "firebase/database";
import db from "../../../firebase/database";
import MyButton from "../../../components/UI/MyButton";

export default {
  name: "UsersEdit",
  components: {MyButton},
  mounted() {
    const usersRef = ref(db, `users/${this.id}`)
    onValue(usersRef, (snapshot) => {
      this.data = snapshot.val()
      this.name = this.data.name
      this.birthday = this.data.birthday.split('.').reverse().join('-')
      this.city = this.data.city
      this.email = this.data.email
      this.language = this.data.language
      this.gender = this.data.gender
      this.nickname = this.data.nickname
      this.phone = this.data.phone
      this.registration = this.data.registration
      this.password = this.data.password
      this.card = this.data.card
      this.uid = this.data.uid
    })
  },
  props: ['id'],
  data() {
    return {
      name: '',
      birthday: '',
      city: '',
      email: '',
      language: '',
      gender: '',
      nickname: '',
      phone: '',
      registration: '',
      password: '',
      card: '',
    }
  },
  methods: {
    submit() {
      set(ref(db, `users/${this.id}`), {
        id: this.id,
        birthday: this.birthday.split('-').reverse().join('.'),
        card: this.card,
        city: this.city,
        email: this.email,
        gender: this.gender,
        language: this.language,
        name: this.name,
        nickname: this.nickname,
        password: this.password,
        phone: this.phone,
        registration: this.registration,
        uid: this.uid
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.users-edit {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.users-edit__items {
  margin-right: 200px;
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
.users-edit__btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
}
</style>