const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // webpack 4.0 以上不用配置 entey & output  默认将 ./src/index.js 打包到 ./dist/main.js 也可以手动配置

  // 配置开发者模式， webpack4.0 以上推荐在这里配置
  mode: 'development',
  plugins: [
    // 配置在虚拟内存页面的根目录中生成一个html入口文件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './dist/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      // 规定自己写的样式使用 scss  文件，可以模块化类名样式和id样式，避免与插件的css文件发生冲突
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }
    ]
  },
  resolve: {
    // 配置省略添加路径时可以忽略后缀名的文件
    extensions: [ '.js', '.jsx', '.json' ],
    // 配置短路径
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}