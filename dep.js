export class Dep {
  constructor() {
    this.subs = [];
  }
  add(target) {
    this.subs.push(target);
  }
  remove(target) {
    this.subs.splice(this.subs.indexOf(target),1) ;
  }
  notify() {
    const subs = this.subs.slice();
    for (let i = 0; i < subs.length; i++){
      subs[i].update();
    }
  }
}