<template>
  <tr>
    <td>{{ pages.name }}</td>
    <td>{{ pages.date }}</td>
    <td>{{ pages.actualValue }}</td>
    <router-link :to="'/admin/pages-edit/' + pages.id"><my-edit /></router-link>
    <my-delete
        v-if="pages.name !== 'Главная страница'
        && pages.name !== 'О кинотеатре'
        && pages.name !== 'Кафе - Бар'
        && pages.name !== 'Vip - зал'
        && pages.name !== 'Реклама'
        && pages.name !== 'Детская комната'
        && pages.name !== 'Контакты'"
        @click="deletePages"/>
  </tr>
</template>

<script>
import MyEdit from "../UI/MyEdit";
import MyDelete from "../UI/MyDelete";
import {deleteObject, ref} from "firebase/storage";
import storage from "../../firebase/storage";

export default {
  name: "PagesListItem",
  components: {MyDelete, MyEdit},
  props: ['pages', 'items'],
  methods: {
    deletePages() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 акция')
      }
      this.$emit('delete', {
        id: this.pages.id
      })
      let path = `sales/${this.pages.id}/mainImg`
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