/*
 * @Author: your name
 * @Date: 2021-06-10 20:58:24
 * @LastEditTime: 2021-06-10 21:17:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/script/build.js
 */
var glob = require("glob");
var fs = require("fs");
const copyFile = (formPath, toPath) => {
  fs.readFile(formPath, "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    fs.writeFile(toPath, data, "utf-8", function (error) {
      if (error) {
        throw error;
      }
    });
  });
};

glob.sync("./src/function/**/*.json").forEach((file) => {
  copyFile(file, file.replace("src", "dist"));
});
