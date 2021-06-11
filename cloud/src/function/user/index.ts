/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-11 17:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/functions/login/index.js
 */
// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

import cloud from "wx-server-sdk";

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV as unknown as string,
});

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 *
 * event 参数包含小程序端调用传入的 data
 *
 */
exports.main = async (
  event: CloudFunction.BaseReq<CloudFunction.User.Action>
) => {
  const login: CloudFunction.User.Login<cloud.ICloud.WXContext> = async () => {
    // 可执行其他自定义逻辑
    // console.log 的内容可以在云开发云函数调用日志查看

    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
    const wxContext = cloud.getWXContext();

    return {
      data: wxContext,
      msg: "登录成功",
    };
  };
  switch (event.action) {
    case "login":
      return login();
    default:
      break;
  }
};
