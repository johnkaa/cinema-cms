module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/cms/'
      : '/',
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ua',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
}
