const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
  // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/data-news_project'
  : '/'
  ,
  productionSourceMap: false,
  lintOnSave:false,  // 修改成false 就是不检查了
  transpileDependencies: true
})
