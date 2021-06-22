/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-22 14:13:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/config/index.js
 */
const path = require("path");
const vantComponentsList = [];
const config = {
  projectName: "taro-typescript",
  date: "2021-6-9",
  // designWidth: 750,
  // deviceRatio: {
  //   640: 2.34 / 2,
  //   750: 1,
  //   828: 1.81 / 2,
  // },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: "static",
        to: "dist/static",
      },
      {
        from: "src/components/vant-weapp/dist/common/style",
        to: "dist/components/vant-weapp/dist/common/style",
      },
      {
        from: "src/components/vant-weapp/dist/common/index.wxss",
        to: "dist/components/vant-weapp/dist/common/index.wxss",
      },
      {
        from: "src/components/vant-weapp/dist/calendar/index.wxs",
        to: "dist/components/vant-weapp/dist/calendar/index.wxs",
      },
      {
        from: "src/components/vant-weapp/dist/calendar/utils.wxs",
        to: "dist/components/vant-weapp/dist/calendar/utils.wxs",
      },
      {
        from: "src/components/vant-weapp/dist/calendar/calendar.wxml",
        to: "dist/components/vant-weapp/dist/calendar/calendar.wxml",
      },
      {
        from: "src/components/vant-weapp/dist/calendar/components/month/index.wxs",
        to: "dist/components/vant-weapp/dist/calendar/components/month/index.wxs",
      },
      ...vantComponentsList.map((v) => {
        return {
          from:
            "src/components/vant-weapp/dist/" +
            v +
            "/index.wxs",
          to:
            "dist/components/vant-weapp/dist/" +
            v +
            "/index.wxs",
        };
      }),
    ],
    options: {},
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName:
            "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName:
            "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  alias: {
    "@": path.resolve(__dirname, "..", "src/"),
    "~/vant": path.resolve(
      __dirname,
      "../src/components/vant-weapp/dist"
    ),
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
