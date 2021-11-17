<template>
  <div>
    <div class="cabinet">
      <div class="cabinet__items">
        <div class="cabinet__item">
          <span>{{ $t('cabinet.name') }}</span>
          <input type="text" placeholder="Имя" v-model="name">
        </div>
        <div class="cabinet__item">
          <span>{{ $t('cabinet.nickname') }}</span>
          <input type="text" placeholder="Псевдоним" v-model="nickname">
        </div>
        <div class="cabinet__item">
          <span>E-mail</span>
          <input type="text" placeholder="E-mail" v-model="email">
        </div>
        <div class="cabinet__item">
          <span>Пароль</span>
          <input type="password" placeholder="Пароль" v-model="password">
        </div>
        <div class="cabinet__item">
          <span>{{ $t('cabinet.card') }}</span>
          <input type="text" placeholder="Номер карты" v-model="card">
        </div>
      </div>
      <div class="cabinet__items">
        <div class="cabinet__item">
          <span>{{ $t('cabinet.lang') }}</span>
          <div class="language__select select">
            <input name="language-select" id="ru" type="radio" value="ru" v-model="language">
            <label for="ru">{{ $t('cabinet.ru') }}</label>
          </div>
          <div class="language__select select">
            <input name="language-select" id="ua" type="radio" value="ua" v-model="language">
            <label for="ua">{{ $t('cabinet.ua') }}</label>
          </div>
        </div>
        <div class="cabinet__item">
          <span>{{ $t('cabinet.gender') }}</span>
          <div class="gender__select select">
            <input name="gender-select" id="male" type="radio" value="male" v-model="gender">
            <label for="male">{{ $t('cabinet.male') }}</label>
          </div>
          <div class="gender__select select">
            <input name="gender-select" id="female" type="radio" value="female" v-model="gender">
            <label for="female">{{ $t('cabinet.female') }}</label>
          </div>
        </div>
        <div class="cabinet__item">
          <span>Телефон</span>
          <input type="text" placeholder="Телефон" v-model="phone">
        </div>
        <div class="cabinet__item">
          <span>{{ $t('cabinet.birthday') }}</span>
          <input type="date" v-model="birthday" min="1960-01-01" max="2000-12-31">
        </div>
        <div class="cabinet__item">
          <span>{{ $t('cabinet.city') }}</span>
          <select v-model="city">
            <option disabled value="">{{ $t('cabinet.cityChose') }}</option>
            <option value="Киев">{{ $t('cabinet.cityOptions.kiev') }}</option>
            <option value="Львов">{{ $t('cabinet.cityOptions.lvov') }}</option>
            <option value="Одесса">{{ $t('cabinet.cityOptions.odessa') }}</option>
          </select>
        </div>
      </div>
    </div>
    <router-link to="/">
      <my-button class="users-edit__btn" @click="submit">Сохранить</my-button>
    </router-link>
  </div>
</template>

<script>
import {ref, set} from "firebase/database";
import db from "../../firebase/database";
import MyButton from "../../components/UI/MyButton";
import {mapGetters} from "vuex";

export default {
  name: "Cabinet",
  components: {MyButton},
  computed: mapGetters(['getStateAuth']),
  mounted() {
    this.setupCabinet()
  },
  updated() {
    if(!this.load) {
      setTimeout(() => {
        this.setupCabinet()
      },500)
    }
    this.load = true
  },
  data() {
    return {
      id: '',
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
      load: false,
    }
  },
  methods: {
    setupCabinet() {
      const user = this.getStateAuth.currentUser
      this.id = user.id
      this.uid = user.uid
      this.name = user.name
      this.birthday = user.birthday
      this.city = user.city
      this.email = user.email
      this.language = user.language
      this.gender = user.gender
      this.nickname = user.nickname
      this.phone = user.phone
      this.registration = user.registration
      this.password = user.password
      this.card = user.card
    },
    submit() {
      set(ref(db, `users/${this.id}`), {
        id: this.id,
        uid: this.uid,
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
        registration: this.registration
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
}
.cabinet__items {
  margin-right: 200px;
}
.cabinet__item {
  display: flex;
  align-items: center;
  span {
    margin-right: 15px;
    width: 150px;
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