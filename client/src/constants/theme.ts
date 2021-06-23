import { toRpx } from "@/utils";
import { CSSProperties } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-22 14:39:39
 * @LastEditTime: 2021-06-23 10:49:45
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/constants/theme.ts
 */
export enum Theme {
  baseColor = "rgba(142, 151, 253, 1)",
}

export const ThemeStyle: {
  pageCommonStyle: CSSProperties;
  bigBtnStyle: CSSProperties;
} = {
  pageCommonStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    paddingLeft: toRpx(24),
    paddingRight: toRpx(24),
    paddingBottom: "env(safe-area-inset-bottom)",
    minHeight: "100vh",
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
