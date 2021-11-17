<template>
  <button class="close-btn">x</button>
</template>

<script>
export default {
  name: "MyCloseButton"
}
</script>

<style scoped>
.close-btn {
  font-weight: 700;
  border-radius: 50%;
  border: 2px solid #000;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
</style>