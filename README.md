# react-manual-configuration

### 使用方式 / quick start
1. `npm i` 安装所有依赖
2. `npm run dev` 运行项目


### 配置步骤说明 / instroduce the config steps
1. 初始化webpack项目 / init a webpack project
```json
  "webpack": "^4.6.0",
  "webpack-cli": "^2.0.14",
  "webpack-dev-server": "^3.1.3" 
```
2. 配置虚拟内存中生成 html 文件 / config html entry at virtual memory 
```json
  "html-webpack-plugin": "^3.2.0"
```
3. 配置 babel 转换 js 高级语法和 jsx 语法 / config load higher javascript grammar & react's jsx grammar
```json
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.4",
  "babel-plugin-transform-runtime": "^6.23.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-0": "^6.24.1"
```
```javascript
{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
```
4. 安装 react  / install react
```json
  "react": "^16.3.2",
  "react-dom": "^16.3.2"
```
5. 配置 css 和 sass 文件的加载器  / config load the css files & scss files
```json
  "css-loader": "^0.28.11",
  "style-loader": "^0.21.0",
  "node-sass": "^4.8.3",
  "sass-loader": "^7.0.1"
```
```javascript
  { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
  // 规定自己写的样式使用 scss  文件，可以模块化类名样式和id样式，避免与插件的css文件发生冲突
  { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }
```
基本配置完成 / basic config finished
