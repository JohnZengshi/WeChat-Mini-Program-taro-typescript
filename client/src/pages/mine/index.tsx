import { CloudFunctionName } from "@/constants/cloudFunction";
import { useMappedState } from "@/store";
import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect } from "react";
import useAPI from "../../service/index";

/*
 * @Author: your name
 * @Date: 2021-06-10 10:08:53
 * @LastEditTime: 2021-06-15 14:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/mine/index.tsx
 */
export default function Mine() {
  const { user } = useMappedState((state) => state);
  const { request } = useAPI();
  useEffect(() => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.GetList>[0],
      ReturnType<CloudFunction.Todos.GetList>
    >(CloudFunctionName.Todos).then((res) => {
      console.log(res.data);
    });
    return () => {};
  }, []);
  return (
    <View
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Mine:{user?.OPENID}</Text>
    </View>
  );
}
