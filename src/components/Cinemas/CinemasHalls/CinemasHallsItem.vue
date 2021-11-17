<template>
  <tr>
    <td>{{ hall.name }}</td>
    <td>{{ hall.date }}</td>
    <my-edit @click="editHallsItem"/>
    <my-delete @click="deleteHallsItem"/>
  </tr>
</template>

<script>
import MyEdit from "../../UI/MyEdit";
import MyDelete from "../../UI/MyDelete";
import {deleteObject, ref} from "firebase/storage";
import storage from "../../../firebase/storage";
export default {
  name: "CinemasHallsItem",
  components: {MyDelete, MyEdit},
  props: ['hall', 'pathID', 'items'],
  methods: {
    editHallsItem() {
      this.$emit('edit', {})
      this.$router.push({
        path: `/admin/cinemas-edit-halls/${this.pathID}/${this.hall.id}`
      })
    },
    deleteHallsItem() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должен быть хотя бы 1 зал')
      }
      this.$emit('delete', {
        id: this.hall.id
      })
      let path = `cinemas/${this.pathID}/halls/${this.hall.id}/hallImg`
      let storageRef = ref(storage, path)
      deleteObject(storageRef)
      path = `cinemas/${this.pathID}/halls/${this.hall.id}/scheme`
      storageRef = ref(storage, path)
      deleteObject(storageRef)
    }
  }
}
</script>

<style lang="scss" scoped>
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;
  background-color: rgba(#42b983, .3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>