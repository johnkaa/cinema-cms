<template>
  <div class="cinemas-edit__halls">
    <table class="iksweb">
      <tbody>
      <tr style="background-color: #42b983; font-weight: 700;">
        <td>Название</td>
        <td>Дата создания</td>
      </tr>
      <cinemas-halls-item
          v-for="(hall, index) in halls"
          :key="index"
          :hall="hall"
          :pathID="pathID"
          :items="halls"
          @edit="editHallsItem"
          @delete="deleteHallsItem"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import CinemasHallsItem from "./CinemasHallsItem";

export default {
  name: "CinemasEditHalls",
  components: {CinemasHallsItem},
  props: ['halls', 'pathID'],
  methods: {
    editHallsItem() {
      this.$emit('edit', {})
    },
    deleteHallsItem(hall) {
      this.$emit('delete', {
        id: hall.id
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