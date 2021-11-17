<template>
  <table class="iksweb">
    <tbody>
    <tr style="background-color: #42b983; font-weight: 700;">
      <td>Название</td>
      <td>Дата создания</td>
      <td>Статус</td>
    </tr>
    <sales-list-item
        v-for="(sales, index) in salesList"
        :key="index"
        :sales="sales"
        :items="salesList"
        @delete="deleteSales"
    />
    </tbody>
  </table>
</template>

<script>
import SalesListItem from "./SalesListItem";
export default {
  name: "SalesList",
  components: {SalesListItem},
  props: ['salesList'],
  methods: {
    deleteSales(sales) {
      this.$emit('delete', {
        id: sales.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
table.iksweb{text-decoration: none;border-collapse:collapse;width:100%;text-align:left;max-width: 50%;margin-bottom:20px;}
table.iksweb tr{position:relative;}
table.iksweb td{font-size:14px;color:#000000;background-color: rgba(#42b983, .3);}
table.iksweb td{white-space:pre-wrap;padding:12px 20px;line-height:14px;vertical-align: middle;border: 1px solid #000;}
</style>