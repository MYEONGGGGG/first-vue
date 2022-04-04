const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 추가설정(필요시 설정, 앱을 배포할 때)
  // pwa: {
  //   name: 'vuestagram',
  //   themecolor: '#4DBA87',
  //   msTileColor: '#000000',
  //
  //   workboxOptions: {
  //     exclude: [/\.map$/, /mainfest\.json$/, 'index.html']
  //   }
  // }
})
