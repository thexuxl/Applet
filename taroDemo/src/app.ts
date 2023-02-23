import { Component, PropsWithChildren } from 'react'
import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount() { }

  componentDidShow() { console.log("ceshi") }

  componentDidHide() {
    console.log("ceshi")
  }

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
