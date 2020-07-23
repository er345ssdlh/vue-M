/*
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\vue.config.js
 */
const vConsolePlugin = require('vconsole-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

console.log(`构建环境：${process.env.NODE_ENV}；构建目标：${process.env.VUE_APP_TARGET}`)

module.exports = {
  publicPath: process.env.VUE_APP_PATH_NAME, // 项目部署目录
  outputDir: `./dist/${process.env.VUE_APP_PATH_NAME}`, // npm run build 后 生成的文件目录
  productionSourceMap: process.env.VUE_APP_TARGET !== 'production', // production环境 取消生成map文件 压缩体积
  configureWebpack: {
    plugins: [
      // eslint-disable-next-line new-cap
      new vConsolePlugin({
        enable: process.env.VUE_APP_TARGET === 'qa'
      }),
      // 开启静态gzip
      new CompressionPlugin()
    ]
  },
  devServer: { // 本地服务代理
    proxy: 'https://mapi.yiche.com' // 服务器
  }
}
