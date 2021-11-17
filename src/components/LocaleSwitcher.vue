<template>
  <ul class="locale">
    <li class="locale__item" v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      {{ locale }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  mounted() {
    this.locales.push(process.env.VUE_APP_I18N_LOCALE)
    this.locales.push(process.env.VUE_APP_I18N_FALLBACK_LOCALE)
  },
  data() {
    return {
      locales: []
    }
  },
  methods: {
    switchLocale(locale) {
      if(this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.locale {
  display: flex;
  text-transform: uppercase;
}
.locale__item {
  color: #42b983;
  cursor: pointer;
  border: 1px solid #42b983;
  padding: 1px 5px;
  & + & {
    margin-left: 10px;
  }
}
</style>