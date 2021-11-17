<template>
  <input @input="updateInput" class="my-input" type="text" :placeholder="place">
</template>

<script>
export default {
  name: "MyInput",
  props: ['place'],
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>