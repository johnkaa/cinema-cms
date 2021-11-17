<template>
  <div>
    <h2 class="banners__title title">{{ getStateBannersTop.title }}</h2>
    <div class="banners__block">
      <div class="switch">
        <input type="checkbox" v-model="getStateBannersTop.database.active">
      </div>
      <p class="banners__size">Размер: {{ getStateBannersTop.size }}</p>
      <div class="banners__items">
        <banners-item
            v-for="(item, index) in getStateBannersTop.database.items"
            :key="index"
            :item="item"
            :store-items="getStateBannersTop.database.items"
            path="mainTop"
            :desc="true" />
        <my-button class="banners__add" @click="addBannersTopItem">Добавить фото</my-button>
      </div>
      <div class="banners__block-bottom">
        <div class="select">
          <p>Скорость вращения:</p>
          <select v-model="getStateBannersTop.database.interval">
            <option disabled value="">Выберите интервал</option>
            <option v-for="option in getStateBannersTop.options" :key="option.value" :value="option.value">{{ option.name }}</option>
          </select>
        </div>
        <my-button class="save" @click="submit">Сохранить</my-button>
      </div>
      <p class="info text-success" v-if="getStateBannersTop.uploaded">Изменения сохранены</p>
    </div>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import BannersItem from "./BannersItem";
import { mapGetters, mapMutations } from "vuex"
export default {
  name: "BannersBlock",
  components: {MyButton,BannersItem},
  computed: mapGetters(['getStateBannersTop']),
  methods: {
    ...mapMutations(['addBannerTop', 'addBannersTopItem']),
    submit() {
      this.addBannerTop({
        active: this.getStateBannersTop.database.active,
        interval: this.getStateBannersTop.database.interval,
        items: this.getStateBannersTop.database.items
      })
    },
  }
}
</script>

<style scoped>

.banners__block {
  border-radius: 5px;
  border: 1px solid #000;
  padding: 20px;
  position: relative;
}
.banners__size {
  text-align: left;
}
.switch {
  position: absolute;
  right: 10px;
}
.switch input[type='checkbox'] {
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background: #c6c6c6;
  border-radius: 20px;
  transition: .5s;
  box-shadow: inset 0 0 5px rgba(0,0,0, .2);
  cursor: pointer;
}
.switch input:checked[type='checkbox'] {
  background: #42b983;
}
.switch input[type='checkbox']:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #fff;
  transition: .5s;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0,0,0, .2);
}
.switch input:checked[type='checkbox']:before {
  left: 20px;
}
.banners__items {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.banners__add {
  align-content: flex-end;
}
.select {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 350px;
}
.select p {
  margin-right: 10px;
}
.select select {
  height: 50px;
}
.banners__block-bottom {
  margin-top: 40px;
  display: flex;
  padding: 0 100px;
}
</style>