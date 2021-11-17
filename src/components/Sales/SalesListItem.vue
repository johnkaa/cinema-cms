<template>
  <tr>
    <td>{{ sales.name }}</td>
    <td>{{ sales.date }}</td>
    <td>{{ sales.actualValue }}</td>
    <router-link :to="'/admin/sales-edit/' + sales.id"><my-edit /></router-link>
    <my-delete @click="deleteSales"/>
  </tr>
</template>

<script>
import MyEdit from "../UI/MyEdit";
import MyDelete from "../UI/MyDelete";
import {deleteObject, ref} from "firebase/storage";
import storage from "../../firebase/storage";

export default {
  name: "SalesListItem",
  components: {MyDelete, MyEdit},
  props: ['sales', 'items'],
  methods: {
    deleteSales() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 акция')
      }
      this.$emit('delete', {
        id: this.sales.id
      })
      let path = `sales/${this.sales.id}/mainImg`
      let storageRef = ref(storage, path)
      deleteObject(storageRef)
    }
  }
}
</script>

<style lang="scss" scoped>
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;background-color:rgba(#42b983,.3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>