<template>
  <div class="users">
    <h2 class="users__title title">Пользователи</h2>
    <form class="search" @submit.prevent><input type="text" placeholder="Введите имя пользователя" v-model="search"></form>
    <users-list :users-list="usersByName" @delete="deleteUsers"/>
  </div>
</template>

<script>
import UsersList from "../../../components/Users/UsersList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Users",
  components: {UsersList},
  computed: {
    ...mapGetters(['getStateUsers']),
    usersByName() {
      return this.getStateUsers.database.filter(element => {
        return element.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapMutations(['deleteUsersItem']),
    deleteUsers(id) {
      this.deleteUsersItem(id)
    },
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

</style>