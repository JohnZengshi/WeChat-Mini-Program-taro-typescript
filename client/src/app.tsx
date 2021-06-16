/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-16 11:57:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.ts
 */
import { ReactNode } from "react";
import Taro from "@tarojs/taro";

import "./app.scss";
import "taro-ui/dist/style/index.scss";
import { StoreContext } from "./store";
import { makeStore } from "./store/index";
const store = makeStore();
function App(props: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default App;
