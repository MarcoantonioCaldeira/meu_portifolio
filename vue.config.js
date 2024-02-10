const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'  ? '/meu_portifolio/' : '/',
  transpileDependencies: true,
  lintOnSave:false
})
