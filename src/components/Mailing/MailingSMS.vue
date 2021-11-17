<template>
  <div class="mailing__block">
    <h2 class="mailing__title">SMS</h2>
    <form class="mailing__select">
      <p class="item">Выбрать кому слать SMS</p>
      <div class="item">
        <input name="select1" id="all" type="radio" value="all" v-model="type">
        <label for="all">Все пользователи</label>
      </div>
      <div class="item">
        <input name="select1" id="select" type="radio" value="select" v-model="type">
        <label for="select">Выборочно</label>
      </div>
      <router-link to="/admin/mailing-users/sms" v-if="type === 'select'">
        <my-button class="item" @submit.prevent>Выбрать пользователей</my-button>
      </router-link>
    </form>
    <div class="mailing__sms-text">Текст SMS<span>Символов: {{ this.symbols }}</span></div>
    <div class="mailing__sms-input">
      <textarea class="mailing__sms-textarea" placeholder="Введите текст" v-model="text" @input="setLength"></textarea>
      <div class="mailing__sms-stats">
        <p>Кол-во SMS: <span>173 629</span></p>
        <p>Рассылка выполнена на: <span>45%</span></p>
      </div>
    </div>
    <my-button @click="submit">Начать рассылку</my-button>
    <p class="info text-danger" v-if="error">Выберите кому слать</p>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import {mapMutations} from "vuex";
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";
export default {
  name: "MailingSMS",
  components: {MyButton},
  mounted() {
    if(this.$route.query.type === 'sms') {
      this.type = 'select'
    }
    const usersRef = ref(db, `users/`)
    onValue(usersRef, (snapshot) => {
      if(!snapshot.val()) {
        return
      }
      this.data = snapshot.val()
    })
  },
  data() {
    return {
      text: '',
      symbols: 0,
      type: 'all',
      users: [],
      error: false
    }
  },
  methods: {
    ...mapMutations(['addSmsMailing']),
    submit() {
      if(!this.type) {
        this.error = true
        return setTimeout(() => this.error = false, 3000)
      }
      if(this.$route.query.type === 'sms') {
        this.users = this.$route.query.users.sort()
      }
      if(this.type === 'all') {
        this.users = []
        this.data.forEach((item) => {
          this.users.push(item)
        })
      }
      this.addSmsMailing({
        text: this.text,
        users: this.users
      })
    },
    setLength() {
      this.symbols = this.text.length
    }
  }
}
</script>

<style lang="scss" scoped>
.mailing__block {
  border-radius: 5px;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 20px 100px;
  margin-bottom: 30px;
}
.mailing__select {
  display: flex;
  margin: 30px -10px;
}
.item {
  margin: 0 10px;
  label {
    margin-left: 5px;
  }
}
.mailing__sms-text {
  text-align: left;
  margin: 20px 0;
}
.mailing__sms-text span {
  margin-left: 340px;
}
.mailing__sms-input {
  display: flex;
  margin: 20px 0;
}
.mailing__sms-textarea {
  width: 500px;
  height: 300px;
  resize: none;
  margin-right: 100px;
  padding: 10px;
}
.mailing__sms-textarea::placeholder {
  color: #000;
  font-family: sans-serif;
  font-size: 16px;
}
.mailing__sms-stats {
  text-align: left;
}
.mailing__sms-stats span {
  color: #42b983;
}
</style>