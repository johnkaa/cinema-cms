<template>
  <div class="mailing__email-list__item">
    <div>
      <input name="last-list" :id="template.id" type="radio" :value="template.name" v-model="lastTemplate" @change="setTemplate">
      <label :for="template.id">{{ template.name }}</label>
    </div>
    <a class="delete" href="/" @click.prevent="deleteTemplate">удалить</a>
  </div>
</template>

<script>
export default {
  name: "MailingLastTemplates",
  props: ['template'],
  data() {
    return {
      lastTemplate: ''
    }
  },
  methods: {
    setTemplate() {
      this.$emit('set', this.lastTemplate)
    },
    deleteTemplate() {
      this.$emit('delete', this.template.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.mailing__email-list__item {
  display: flex;
  justify-content: space-between;
  label {
    margin-left: 5px;
  }
}
.delete {
  color: red;
  &:hover {
    text-decoration: underline;
  }
}
</style>