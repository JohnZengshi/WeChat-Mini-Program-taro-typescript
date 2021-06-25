/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-25 15:13:07
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/app.config.ts
 */
import { Config } from "@tarojs/taro";
import { useGlobalIconFont } from "./components/iconfont/helper";
import { IconNames } from "./components/iconfont/index";

export enum PageListName {
  Home = "pages/Home/index",
  Mine = "pages/Mine/index",
  SignUp = "pages/SignUp/index",
  SignIn = "pages/SignIn/index",
  SignInAndSignUp = "pages/SignInAndSignUp/index",
  Welcome = "pages/Welcome/index",
  CourseDetail = "pages/CourseDetail/index",
  Meditate = "pages/Meditate/index",
}
export const PageList: (Taro.TarbarList & {
  iconName?: IconNames;
  selectIconName?: IconNames;
})[] = [
  {
    text: "Home",
    pagePath: PageListName.Home,
    iconPath: "/static/images/ic_home_nor.png",
    selectedIconPath: "/static/images/ic_home_sel.png",
    iconName: "home",
  },
  {
    text: "Sleep",
    pagePath: PageListName.Mine,
    iconPath: "/static/images/ic_shopping_cart_nor.png",
    selectedIconPath:
      "/static/images/ic_shopping_cart_sel.png",
    iconName: "reloadtime",
  },
  {
    text: "Meditate",
    pagePath: PageListName.Meditate,
    iconName: "message",
  },
];

export const config: Config = {
  pages: [
    PageListName.Home,
    PageListName.Mine,
    PageListName.SignUp,
    PageListName.SignIn,
    PageListName.SignInAndSignUp,
    PageListName.Welcome,
    PageListName.CourseDetail,
    PageListName.Meditate,
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
