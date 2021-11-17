<template>
  <button class="delete"><img src="../../assets/icons/delete.png" alt=""></button>
</template>

<script>
export default {
  name: "MyDelete"
}
</script>

<style scoped>
.delete {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: -110px;
  top: 50%;
  transform: translateY(-50%);
}
.delete img {
  width: 25px;
  height: 25px;
}
</style>