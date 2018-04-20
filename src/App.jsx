import React from 'react'

// 导入样式
import AppStyle from '@/App.scss'
export default class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <h1 className={ AppStyle.hello }>Hello React</h1>
    )
  }
}