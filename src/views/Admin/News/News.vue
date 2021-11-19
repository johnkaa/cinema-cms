<template>
  <div class="news">
    <h2 class="news__title title">Список новостей</h2>
    <div class="news__btn">
      <router-link :to="'/admin/news-edit/' + (+new Date()-(+new Date()%100)) / 100">
      <my-button class="news__plus-btn"><span class="plus">+</span>Создать новость</my-button>
      </router-link>
    </div>
    <news-list :news-list="this.getStateNews.database" @delete="deleteNews"/>
    <p class="info text-danger" v-if="this.getStateNews.deleted">Новость удалена</p>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import NewsList from "../../../components/News/NewsList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "News",
  components: {
    NewsList,
    MyButton,
  },
  computed: mapGetters(['getStateNews']),
  mounted() {
    this.readNewsData()
  },
  methods: {
    ...mapMutations(['readNewsData', 'deleteNewsItem']),
    deleteNews(id) {
      this.deleteNewsItem({
        id: id
      })
    }
  }
}
</script>

<style scoped>
.news__btn {
  display: flex;
  justify-content: flex-end;
}
.news__plus-btn {
  display: flex;
  align-items: center;
}
.plus {
  color: #42b983;
  margin-right: 10px;
  font-size: 30px;
}
table.iksweb{text-decoration: none;border-collapse:collapse;width:50%;text-align:left;margin: 0 auto;margin-top: 50px;}
table.iksweb th{font-weight:normal;font-size:14px; color:#000;background-color:#42b983;}
table.iksweb tr{position: relative;}
table.iksweb td{font-size:13px;color:#000;}
table.iksweb td,table.iksweb th{white-space:pre-wrap;padding:10px 3px;line-height:13px;vertical-align: middle;border: 1px solid #000;}
</style>