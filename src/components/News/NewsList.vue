<template>
  <table class="iksweb">
    <tbody>
    <tr style="background-color: #42b983; font-weight: 700;">
      <td>Название</td>
      <td>Дата создания</td>
      <td>Статус</td>
    </tr>
    <news-list-item
        v-for="(news, index) in newsList"
        :key="index"
        :news="news"
        :items="newsList"
        @delete="deleteNews"
    />
    </tbody>
  </table>
</template>

<script>
import NewsListItem from "./NewsListItem";
export default {
  name: "NewsList",
  components: {NewsListItem},
  props: ['newsList'],
  methods: {
    deleteNews(news) {
      this.$emit('delete', {
        id: news.id
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