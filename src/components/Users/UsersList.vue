<template>
  <table class="iksweb">
    <tbody>
    <tr style="background-color: #42b983; font-weight: 700;">
      <td v-if="select"></td>
      <td>ID</td>
      <td>Дата регистрации</td>
      <td>День рождения</td>
      <td>Email</td>
      <td>Телефон</td>
      <td>ФИО</td>
      <td>Псевдоним</td>
      <td>Город</td>
    </tr>
    <users-list-item
        v-for="(user, index) in usersList"
        :key="index"
        :user="user"
        :items="usersList"
        :select="select"
        @delete="deleteUser"
        @setSelectedUsers="setSelectedUsers"
    />
    </tbody>
  </table>
</template>

<script>

import UsersListItem from "./UsersListItem";
export default {
  name: "UsersList",
  components: {UsersListItem},
  props: ['usersList', 'select'],
  methods: {
    deleteUser(id) {
      this.$emit('delete', id)
    },
    setSelectedUsers(item) {
      this.$emit('setSelectedUsers', {
        user: item.user,
        on: item.on
      })
    }
  }
}
</script>

<style lang="scss" scoped>
table.iksweb{text-decoration: none;border-collapse:collapse;width:100%;text-align:left;max-width:90%;margin-bottom:20px;}
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;background-color: rgba(#42b983, .3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>