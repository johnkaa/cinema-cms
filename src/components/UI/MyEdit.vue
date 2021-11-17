<template>
  <button class="edit"><img src="../../assets/icons/edit.png" alt=""></button>
</template>

<script>
export default {
  name: "MyEdit"
}
</script>

<style scoped>
  .edit {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: -70px;
    top: 50%;
    transform: translateY(-50%);
  }
  .edit img {
    width: 30px;
    height: 30px;
  }
</style>