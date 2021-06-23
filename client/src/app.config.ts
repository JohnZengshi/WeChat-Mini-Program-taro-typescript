/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-23 10:47:32
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.config.ts
 */
import { Config } from "@tarojs/taro";
import { useGlobalIconFont } from "./components/iconfont/helper";
import { IconNames } from "./components/iconfont/index";

export enum PageListName {
  Index = "pages/Index/index",
  Home = "pages/Home/index",
  Mine = "pages/Mine/index",
  SignUp = "pages/SignUp/index",
  SignIn = "pages/SignIn/index",
  SignInAndSignUp = "pages/SignInAndSignUp/index",
  Welcome = "pages/Welcome/index",
}
export const PageList: (Taro.TarbarList & {
  iconName?: IconNames;
  selectIconName?: IconNames;
})[] = [
  {
    text: "首页",
    pagePath: PageListName.Home,
    iconPath: "/static/images/ic_home_nor.png",
    selectedIconPath: "/static/images/ic_home_sel.png",
  },
  {
    text: "购物车",
    pagePath: PageListName.Mine,
    iconPath: "/static/images/ic_shopping_cart_nor.png",
    selectedIconPath:
      "/static/images/ic_shopping_cart_sel.png",
  },
];

export const config: Config = {
  pages: [
    PageListName.Index,
    PageListName.Home,
    PageListName.Mine,
    PageListName.SignUp,
    PageListName.SignIn,
    PageListName.SignInAndSignUp,
    PageListName.Welcome,
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  cloud: true,
  usingComponents: Object.assign(useGlobalIconFont()),
  tabBar: {
    custom: true,
    list: PageList,
    color: "#cacaca",
    backgroundColor: "#ffffff",
    selectedColor: "#27231a",
    position: "bottom",
  },
};
export default config;
