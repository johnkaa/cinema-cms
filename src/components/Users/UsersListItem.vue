<template>
  <tr>
    <td v-if="select"><input type="checkbox" v-model="checkbox" @change="setSelectedUsers"></td>
    <td>{{ user.id }}</td>
    <td>{{ user.registration }}</td>
    <td>{{ user.birthday }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.nickname }}</td>
    <td>{{ user.city }}</td>
    <router-link v-if="!select" :to="'/admin/users-edit/' + user.id"><my-edit /></router-link>
  </tr>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";
import MyEdit from "@/components/UI/MyEdit";

export default {
  name: "UsersListItem",
  components: {MyEdit},
  props: ['user', 'items', 'select'],
  mounted() {
    const usersRef = ref(db, `mailing/selectedUsers/${this.user.id}/selected`)
    onValue(usersRef, (snapshot) => {
      this.checkbox = snapshot.val()
    })
  },
  data() {
    return {
      checkbox: false,
    }
  },
  methods: {
    setSelectedUsers() {
      this.$emit('setSelectedUsers', {
        user: this.user.id,
        on: this.checkbox
      })
    }
  }
}
</script>

<style lang="scss" scoped>
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;background-color:rgba(#42b983,.3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>