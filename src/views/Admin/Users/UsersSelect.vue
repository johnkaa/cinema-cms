<template>
  <div class="users">
    <h2 class="users__title title">Пользователи</h2>
    <form class="search" @submit.prevent><input type="text" placeholder="Введите имя пользователя" v-model="search"></form>
    <users-list :users-list="usersByName" @delete="deleteUsers" :select="true" @setSelectedUsers="setSelectedUsers"/>
    <router-link :to="{
      path: '/admin/mailing',
      query: {
        type: this.type,
        users: this.users
      }
    }">
      <my-button class="btn">Выбрать</my-button>
    </router-link>
  </div>
</template>

<script>
import UsersList from "../../../components/Users/UsersList";
import {mapGetters, mapMutations} from "vuex";
import MyButton from "../../../components/UI/MyButton";

export default {
  name: "UsersSelect",
  components: {MyButton, UsersList},
  computed: {
    ...mapGetters(['getStateUsers']),
    usersByName() {
      return this.getStateUsers.database.filter(element => {
        return element.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  props: ['type'],
  data() {
    return {
      search: '',
      users: []
    }
  },
  methods: {
    ...mapMutations(['deleteUsersItem']),
    deleteUsers(id) {
      this.deleteUsersItem(id)
    },
    setSelectedUsers(item) {
      console.log(item)
      if(item.on) {
        this.users.push(item.user)
      } else {
        this.users.splice(this.users.indexOf(item.user), 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.users {
  position: relative;
}
.search {
  position: absolute;
  right: 50px;
  top: 20px;
  display: flex;
  input {
    width: 210px;
  }
}
.btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>