import { Dep } from './dep.js'
export function defineReactive(data, key, val) {
  let dep = new Dep();
  Object.defineProperties(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.subs.add(window.target);
      return val;
    },
    set: function (newVal) {
      if(newVal === val) return;
      val = newVal;
      dep.notify();
    }
  })
}