import { PageListName } from "@/app.config";

/*
 * @Author: your name
 * @Date: 2021-06-22 11:07:33
 * @LastEditTime: 2021-06-22 12:29:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/utils/index.ts
 */
export function getNavUrl(url: PageListName) {
  return `/${url}`;
}

export function toRpx(
  num: number,
  designWidth: number = 424
): string {
  return (375 / designWidth) * num * 2 + "rpx";
}
