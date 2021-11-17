<template>
  <tr>
    <td>{{ news.name }}</td>
    <td>{{ news.date }}</td>
    <td>{{ news.actualValue }}</td>
    <router-link :to="'/admin/news-edit/' + news.id"><my-edit /></router-link>
    <my-delete @click="deleteNews"/>
  </tr>
</template>

<script>
import MyEdit from "../UI/MyEdit";
import MyDelete from "../UI/MyDelete";
import {deleteObject, ref} from "firebase/storage";
import storage from "../../firebase/storage";
export default {
  name: "NewsListItem",
  components: {MyDelete, MyEdit},
  props: ['news', 'items'],
  methods: {
    deleteNews() {
      if(Object.keys(this.items).length === 1 ) {
        return alert('Должна быть хотя бы 1 новость')
      }
      this.$emit('delete', {
        id: this.news.id
      })
      let path = `news/${this.news.id}/img`
      let storageRef = ref(storage, path)
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