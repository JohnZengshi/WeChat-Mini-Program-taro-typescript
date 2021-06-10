/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-10 18:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.ts
 */
import { Component } from "react";
import Taro from "@tarojs/taro";

import "./app.scss";
import "taro-ui/dist/style/index.scss";
import { StoreContext } from "./store";
import { makeStore } from "./store/index";
class App extends Component {
  componentDidMount() {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init();
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <StoreContext.Provider value={makeStore()}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default App;
