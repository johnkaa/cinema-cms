<template>
  <div class="films__item">
    <img class="films__item-img" :src="film.img" alt="">
    <p class="films__item-text">{{ film.title }}</p>
  </div>
</template>

<script>
export default {
  name: "FilmsItem",
  props: ['film']
}
</script>

<style lang="scss" scoped>
.films__item {
  cursor: pointer;
  img {
    height: 400px;
    width: 400px;
  }
  &-text {
    text-align: center;
    font-weight: 600;
    margin-top: 5px;
  }
}
</style>