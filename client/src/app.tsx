/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-25 14:57:57
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.ts
 */
import { ReactNode, useEffect } from "react";
import Taro, { cloud } from "@tarojs/taro";

import "./app.scss";
import "taro-ui/dist/style/index.scss";
import { StoreContext } from "./store";
import { makeStore } from "./store/index";
const store = makeStore();

function App(props: { children: ReactNode }) {
  const updateCurrentPages = () => {
    const page = getCurrentPages();
    store.dispatch({
      type: "update current pages",
      currentPages: page,
    });
  };
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      try {
        cloud.init();
      } catch (error) {
        console.log(error);
      }
    }
    updateCurrentPages();
    wx.onAppRoute(function () {
      updateCurrentPages();
    });
    return () => {};
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default App;
