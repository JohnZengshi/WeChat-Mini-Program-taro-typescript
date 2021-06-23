/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-23 23:16:50
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.ts
 */
import { ReactNode, useEffect } from "react";
import Taro, {
  cloud,
  redirectTo,
  switchTab,
} from "@tarojs/taro";

import "./app.scss";
import "taro-ui/dist/style/index.scss";
import { StoreContext, useDispatch } from "./store";
import { makeStore } from "./store/index";
import { PageListName } from "./app.config";
import useAPI from "./service";
import { getNavUrl } from "./utils";
const store = makeStore();

function App(props: { children: ReactNode }) {
  const { login } = useAPI(store);

  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      cloud.init();
    }
    login().then(() => {
      redirectTo({
        url: getNavUrl(PageListName.SignInAndSignUp),
      });
      // switchTab({ url: getNavUrl(PageListName.Home) });
    });

    wx.onAppRoute(function () {
      const page = getCurrentPages();
      console.log(page[page.length - 1]?.route);
      store.dispatch({
        type: "update current page path",
        currentPagePath: page[page.length - 1]?.route,
      });
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
