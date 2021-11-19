<template>
  <button class="delete"><span class="iconify" data-icon="ant-design:delete-outlined"></span></button>
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
  font-size: 30px;
}
</style>