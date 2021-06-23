import { PageListName } from "@/app.config";
import useAPI from "@/service";
import Taro, { cloud, redirectTo } from "@tarojs/taro";
import { useEffect } from "react";
import { getNavUrl } from "../../utils/index";

/*
 * @Author: your name
 * @Date: 2021-06-15 14:43:33
 * @LastEditTime: 2021-06-22 21:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
export default function Index() {
  const { login } = useAPI();
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      cloud.init();
    }
    login().then(() =>
      redirectTo({
        url: getNavUrl(PageListName.SignInAndSignUp),
      })
    );
    return () => {};
  }, []);
  return <></>;
}
