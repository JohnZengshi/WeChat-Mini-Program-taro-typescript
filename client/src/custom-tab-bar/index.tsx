/*
 * @Author: your name
 * @Date: 2021-06-10 12:42:21
 * @LastEditTime: 2021-06-24 11:58:45
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/custom-tab-bar/index.tsx
 */
import IconFont from "@/components/iconfont";
import { View } from "@fower/taro";
import Taro, {
  createSelectorQuery,
  getCurrentPages,
  switchTab,
  getCurrentInstance,
  nextTick,
} from "@tarojs/taro";
import {
  useEffect,
  useState,
  useLayoutEffect,
  useMemo,
} from "react";
import { PageList, PageListName } from "../app.config";
import { getNavUrl, toRpx } from "../utils/index";
import { Theme } from "../constants/theme";
import React from "react";
import { useMappedState } from "@/store";

export default function Tabbar() {
  const { currentPages } = useMappedState((state) => state);
  const currentPagePath = useMemo(
    () => currentPages[currentPages.length - 1]?.route,
    [currentPages]
  );
  useEffect(() => {
    // updateTabar();
    console.log("初始化tab");
    return () => {};
  }, []);

  useLayoutEffect(() => {
    nextTick(() => {
      PageList.forEach((_v, i) => {
        createSelectorQuery()
          .select("#tabItem_" + i)
          .boundingClientRect()
          .exec((res) => {
            console.log("#tabItem_" + i, res);
          });
      });
    });
  }, []);

  return (
    <View
      pb2
      pt2
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      {/* <View
        style={{
          width: toRpx(46),
          height: toRpx(46),
          borderRadius: toRpx(18),
          backgroundColor: Theme.baseColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      ></View> */}
      {PageList.map((v, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            switchTab({
              url: getNavUrl(v.pagePath as PageListName),
            });
          }}
          id={"tabItem_" + i}
          ref={(ref) => {
            // console.log(ref);
          }}
        >
          <View
            style={{
              width: toRpx(46),
              height: toRpx(46),
              borderRadius: toRpx(18),
              backgroundColor:
                currentPagePath == v.pagePath
                  ? Theme.baseColor
                  : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconFont
              name={v.iconName!}
              size={44}
              color={
                currentPagePath == v.pagePath
                  ? "#fff"
                  : "#A0A3B1"
              }
            />
          </View>

          <View
            textAlign="center"
            color={
              currentPagePath == v.pagePath
                ? Theme.baseColor
                : "#A0A3B1"
            }
            style={{
              fontSize: toRpx(14),
              lineHeight: "108.1%",
              marginBottom: toRpx(5),
              marginTop: toRpx(5),
            }}
          >
            {v.text}
          </View>
        </View>
      ))}
    </View>
  );
}
// export default class Tabbar extends React.Component {
//   componentDidMount() {
//     const query = createSelectorQuery();
//     nextTick(() => {
//       PageList.forEach((_v, i) => {
//         query
//           .in(getCurrentInstance().page as any)
//           .select("#tabItem_" + i)
//           .fields({ rect: true })
//           .exec((res) => {
//             console.log("#tabItem_" + i, res);
//           });
//       });
//     });
//   }
//   render() {
//     return (
//       <View
//         pb2
//         pt2
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           paddingBottom: "env(safe-area-inset-bottom)",
//           backgroundColor: "white",
//           position: "relative",
//         }}
//       >
//         <View
//           style={{
//             width: toRpx(46),
//             height: toRpx(46),
//             borderRadius: toRpx(18),
//             backgroundColor: Theme.baseColor,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "absolute",
//           }}
//         ></View>
//         {PageList.map((v, i) => (
//           <View
//             key={i}
//             style={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={() => {
//               switchTab({
//                 url: getNavUrl(v.pagePath as PageListName),
//               });
//             }}
//             id={"tabItem_" + i}
//           >
//             <IconFont
//               name={v.iconName!}
//               size={44}
//               // color={
//               //   currentPage == v.pagePath
//               //     ? "#fff"
//               //     : "#A0A3B1"
//               // }
//             />
//             <View
//               textAlign="center"
//               // color={
//               //   currentPage == v.pagePath
//               //     ? Theme.baseColor
//               //     : "#A0A3B1"
//               // }
//               style={{
//                 fontSize: toRpx(14),
//                 lineHeight: "108.1%",
//                 marginBottom: toRpx(5),
//                 marginTop: toRpx(5),
//               }}
//             >
//               {v.text}
//             </View>
//           </View>
//         ))}
//       </View>
//     );
//   }
// }
