const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false // ESLint 검사기능 비활성화(App.vue 에서 차트를 그릴 때 오류 발생)
})
