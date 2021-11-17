<template>
  <button class="my-btn border-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style lang="scss" scoped>
.border-button {
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  color: #000;
  border: 2px solid rgba(#42b983, .4);
  background: none;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

</style>