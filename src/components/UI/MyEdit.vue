<template>
  <button class="edit"><span class="iconify" data-icon="clarity:edit-line"></span></button>
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
    font-size: 30px;
  }
</style>