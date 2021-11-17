<template>
  <div class="poster">
    <div class="poster__nav">
      <router-link to="/poster">{{ $t('poster.poster') }}</router-link>
      <router-link to="/poster/soon">Скоро</router-link>
    </div>
    <router-view class="poster__view"/>
  </div>
</template>

<script>

export default {
  name: "Poster",
}
</script>

<style lang="scss">
.poster {
  padding: 30px 0;
}
.poster__nav {
  position: fixed;
  left: 5px;
  border: 1px solid #000;
  z-index: 1000;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    text-align: left;
    text-decoration: none;
    padding: 5px 20px;
    &.router-link-exact-active {
      background-color: rgba(#42b983, 0.2);
      color: #42b983;
    }
  }
}
.poster__view {
  padding-left: 150px;
}
.poster-films__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.poster-films__item {
  position: relative;
}
.poster-films__type {
  position: absolute;
  right: -25px;
  top: 30px;
  .type {
    background-color: #42b983;
    padding: 5px;
    text-align: center;
    border-radius: 8px;
    min-width: 50px;
  }
  .type + .type {
    margin-top: 5px;
  }
}
.poster-films__date {
  text-align: center;
  margin-bottom: 0;
}
.poster-films__name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
}
.poster-films__item {
  margin-top: 20px;
  img {
    height: 320px;
    width: 320px;
  }
}
.poster-films__btn {
  width: 100%;
  background-color: #42b983;
}
</style>