import { toRpx } from "@/utils";
import {
  getSystemInfo,
  getSystemInfoSync,
} from "@tarojs/taro";
import { CSSProperties } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-22 14:39:39
 * @LastEditTime: 2021-06-24 22:31:36
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/constants/theme.ts
 */
export enum Theme {
  baseColor = "rgba(142, 151, 253, 1)",
}

const contentStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingLeft: toRpx(24),
  paddingRight: toRpx(24),
  boxSizing: "border-box",
};
const pageCommonStyle: CSSProperties = {
  ...contentStyle,
  paddingBottom: "env(safe-area-inset-bottom)",
};
export const ThemeStyle: {
  contentStyle: CSSProperties;
  pageCommonStyle: CSSProperties;
  fullPageCommonStyle: CSSProperties;
  flexPageCommonStyle: CSSProperties;
  bigBtnStyle: CSSProperties;
} = {
  contentStyle,
  pageCommonStyle,
  fullPageCommonStyle: {
    ...pageCommonStyle,
    height: "100%",
  },
  flexPageCommonStyle: {
    ...pageCommonStyle,
    minHeight: "100%",
  },
  bigBtnStyle: {
    width: "100%",
    height: toRpx(63),
    backgroundColor: Theme.baseColor,
    borderColor: Theme.baseColor,
    borderRadius: 100,
    lineHeight: toRpx(63),
    fontSize: toRpx(14),
    marginTop: toRpx(63),
    marginBottom: toRpx(63),
  },
};
