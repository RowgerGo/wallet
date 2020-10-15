/*
 * @Description
 * @author 张晓龙 <2467365764@qq.com>
 * @copyright 2020
 * @Date 2020-10-15 09:22:09
 * @FilePath /wallet/src/util/index.ts
 */
import { utilsInterface } from "../core/interface";
let globalData = {
  isObject: (obj: any) => {
    return Object.prototype.toString.call(obj) === "[object Object]"
  }
}
// 获取key对应的value
export const getValue = (data: any, target: string): any => {
  for (const key of Object.keys(data)) {
    if (key === target) {
      return data[key];
    }
    if (globalData.isObject(data[key])) {
      const result = getValue(data[key], target);
      if (typeof result !== "undefined") {
        return result;
      }
    }
  }
};

// 获取数组中某key和某值对等的对象
export const getObj = (arr: Array<any>, title: string, name: string) => {
  let d = null;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k][title] == name) {
      d = arr[k];
    }
  }
  return d;
};
export default <utilsInterface>{
  getObj: getObj,
  getValue: getValue
}