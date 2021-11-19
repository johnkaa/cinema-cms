<template>
  <div class="pages">
    <h2 class="pages__title title">Список Страниц</h2>
    <div class="pages__btn">
      <router-link :to="'/admin/pages-edit/' + (+new Date() - (+new Date()%100)) / 100">
        <my-button class="pages__plus-btn"><span class="plus">+</span>Создать новую</my-button>
      </router-link>
    </div>
    <pages-list :pages-list="this.getStatePages.database" @delete="deletePages"/>
    <p class="info text-success" v-if="this.getStatePages.uploaded">Страница добавлена</p>
    <p class="info text-danger" v-if="this.getStatePages.deleted">Страница удалена</p>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import PagesList from "../../../components/Pages/PagesList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Pages",
  components: {
    PagesList,
    MyButton,
  },
  computed: mapGetters(['getStatePages']),
  mounted() {
    this.readPagesData()
  },
  methods: {
    ...mapMutations(['readPagesData', 'deletePagesItem']),
    deletePages(id) {
      this.deletePagesItem({
        id: id
      })
    }
  }
}
</script>

<style scoped>
.pages__btn {
  display: flex;
  justify-content: flex-end;
}
.pages__plus-btn {
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