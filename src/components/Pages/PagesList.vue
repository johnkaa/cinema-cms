<template>
  <table class="iksweb">
    <tbody>
    <tr style="background-color: #42b983; font-weight: 700;">
      <td>Название</td>
      <td>Дата создания</td>
      <td>Статус</td>
    </tr>
    <pages-list-item
        v-for="(pages, index) in pagesList"
        :key="index"
        :pages="pages"
        :items="pagesList"
        @delete="deleteSales"
    />
    </tbody>
  </table>
</template>

<script>
import PagesListItem from "./PagesListItem";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "PagesList",
  components: {
    PagesListItem,
  },
  props: ['pagesList'],
  computed: mapGetters(['getStatePages']),
  methods: {
    ...mapMutations(['addPagesItem', 'deletePagesItem']),
    addSales() {
      this.addPagesItem()
    },
    deleteSales(id) {
      this.deletePagesItem({
        id: id
      })
    }
  }
}
</script>

<style scoped>
table.iksweb{text-decoration: none;border-collapse:collapse;width:100%;text-align:left;max-width: 50%;margin-bottom:20px;}
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;background-color: rgba(#42b983, .3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>