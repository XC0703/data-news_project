const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,  // 修改成false 就是不检查了
  transpileDependencies: true
})
