<template>
  <div class="cinemas__item plus">
    +
  </div>
</template>

<script>
export default {
  name: "CinemasAdd"
}
</script>

<style lang="scss" scoped>
.cinemas__item {
  cursor: pointer;
  position: relative;
}
.plus {
  color: #42b983;
  height: 200px;
  width: 150px;
  font-weight: 700;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #42b983;
  border-radius: 10px 20px 30px 40px/30px;
  transition: all .3s;
  overflow: hidden;
  &:hover {
    background-color: rgba(#42b983, .1);
  }
}
</style>