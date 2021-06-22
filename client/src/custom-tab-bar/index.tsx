/*
 * @Author: your name
 * @Date: 2021-06-10 12:42:21
 * @LastEditTime: 2021-06-22 11:09:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/custom-tab-bar/index.tsx
 */
import { CoverImage, CoverView } from "@fower/taro";
import Taro, {
  getCurrentPages,
  switchTab,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import { PageList, PageListName } from "../app.config";
import { getNavUrl } from "../utils/index";

export default function Tabbar() {
  const [currentPage, setCurrentPage] = useState(
    PageList[0].pagePath
  );
  useEffect(() => {
    // updateTabar();
    wx.onAppRoute(function () {
      updateTabar();
    });
    return () => {};
  }, []);

  const updateTabar = () => {
    const page = getCurrentPages();
    // console.log(page[page.length - 1]?.route);
    setCurrentPage(page[page.length - 1]?.route);
  };

  return (
    <CoverView
      pb2
      pt2
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor: "white",
      }}
    >
      {PageList.map((v, i) => (
        <CoverView
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
        >
          <CoverView w12 mb5>
            <CoverImage
              w12
              h12
              src={
                currentPage == v.pagePath
                  ? v.selectedIconPath!
                  : v.iconPath!
              }
            ></CoverImage>
          </CoverView>
          <CoverView
            textAlign="center"
            color="GrayText"
            style={{ fontSize: 12 }}
          >
            {v.text}
          </CoverView>
        </CoverView>
      ))}
    </CoverView>
  );
}
