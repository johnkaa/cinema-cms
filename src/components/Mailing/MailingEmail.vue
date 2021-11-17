<template>
  <div class="mailing__block">
    <h2 class="mailing__title">E-mail</h2>
    <form class="mailing__select">
      <p class="item">Выбрать кому слать email</p>
      <div class="item">
        <input name="select1" id="all1" type="radio" value="all" v-model="type">
        <label for="all1">Все пользователи</label>
      </div>
      <div class="item">
        <input name="select1" id="select1" type="radio" value="select" v-model="type">
        <label for="select1">Выборочно</label>
      </div>
      <router-link to="/admin/mailing-users/email" v-if="type === 'select'">
        <my-button class="item" @submit.prevent>Выбрать пользователей</my-button>
      </router-link>
    </form>
    <div class="mailing__email-inner">
      <div class="mailing__email-info">
        <div class="mailing__email-html mailing__email-line">
          <p style="margin-right: 20px;">Загрузить HTML-письмо</p>
          <my-button @click="onPickFile">Загрузить</my-button>
          <input
              type="file"
              style="display: none"
              ref="fileInput"
              accept="text/html"
              @change="onFilePicked"
          >
        </div>
        <div class="mailing__email-unloading mailing__email-line">
          <p>Загружен файл: <span v-if="!filename" style="color: red;">-</span><span>{{ filename }}</span></p>
        </div>
        <div class="mailing__email-use mailing__email-line">
          <p>Шаблон используемый в текущей рассылке: <span v-if="!lastTemplate" style="color: red;">-</span><span>{{ lastTemplate }}</span></p>
        </div>
        <div class="mailing__email-stats mailing__email-line">
          <p style="margin-right: 20px;">Кол-во писем: <span>173 629</span></p>
          <p>Рассылка выполнена на: <span>45%</span></p>
        </div>
      </div>
      <div class="mailing__email-last">
        <div class="mailing__email-list">
          <p>Список последний загруженных шаблонов</p>
          <mailing-last-templates v-for="template in getStateLastTemplates.database" :key="template.id" :template="template" @set="setTemplate" @delete="deleteTemplate"/>
        </div>
      </div>
    </div>
    <my-button class="submit" @click="submit">Начать рассылку</my-button>
    <p class="info text-danger" v-if="error">Выберите кому слать</p>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import MailingLastTemplates from "./MailingLastTemplates";
import {mapGetters, mapMutations, mapActions} from "vuex";
import db from "../../firebase/database";
import {onValue, ref} from "firebase/database";

export default {
  name: "MailingEmail",
  components: {MailingLastTemplates, MyButton},
  computed: mapGetters(['getStateLastTemplates']),
  mounted() {
    if(this.$route.query.type === 'email') {
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
      type: 'all',
      file: null,
      filename: '',
      lastTemplate: '',
      users: [],
      selectedUsers: {},
      error: false
    }
  },
  methods: {
    ...mapMutations(['addTemplateItem', 'deleteTemplateItem', 'addEmailMailing']),
    ...mapActions(['uploadMailingFile']),
    submit() {
      if(this.$route.query.type === 'email') {
        this.users = this.$route.query.users
      }
      if(this.type === 'all') {
        this.users = []
        Object.keys(this.data).forEach((item) => {
          this.users.push(item)
        })
      }
      if(this.file) {
        this.uploadMailingFile()
      }
      this.addEmailMailing({
        file: this.filename || this.lastTemplate,
        users: this.users
      })
      this.addTemplateItem(this.filename)
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      this.file = files[0]
      this.filename = files[0].name
      this.lastTemplate = ''
    },
    setTemplate(file) {
      this.lastTemplate = file
      this.filename = ''
      this.file = null
    },
    deleteTemplate(id) {
      this.deleteTemplateItem(id)
    },
  }
}
</script>

<style lang="scss" scoped>
.mailing__block {
  border-radius: 5px;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 20px 100px;
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
.mailing__email-line {
  display: flex;
  align-items: center;
  max-width: 600px;
}
.mailing__email-line span {
  color: #42b983;
}
.mailing__email-inner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.mailing__email-last {
  border: 1px solid #000;
  padding: 10px 50px;
  border-radius: 5px;
}
</style>