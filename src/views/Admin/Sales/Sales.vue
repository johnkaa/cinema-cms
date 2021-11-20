<template>
  <div class="sales">
    <h2 class="sales__title title">Список акций</h2>
    <div class="sales__btn">
      <router-link :to="'/admin/sales-edit/' + (+new Date()-(+new Date()%100)) / 100">
        <my-button class="sales__plus-btn plus__btn"><span class="plus">+</span>Создать акцию</my-button>
      </router-link>
    </div>
    <sales-list :sales-list="this.getStateSales.database" @delete="deleteSales"/>
    <p class="info text-success" v-if="this.getStateSales.uploaded">Акция добавлена</p>
    <p class="info text-danger" v-if="this.getStateSales.deleted">Акция удалена</p>
  </div>
</template>

<script>
import MyButton from "../../../components/UI/MyButton";
import SalesList from "../../../components/Sales/SalesList";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Sales",
  components: {
    SalesList,
    MyButton,
  },
  mounted() {
    this.readSalesData()
  },
  computed: mapGetters(['getStateSales', 'getStateUsers']),
  methods: {
    ...mapMutations(['readSalesData', 'deleteSalesItem']),
    deleteSales(id) {
      this.deleteSalesItem({
        id: id
      })
    }
  }
}
</script>

<style scoped>
.sales__btn {
  display: flex;
  justify-content: flex-end;
}
.sales__plus-btn {
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