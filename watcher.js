export class Watcher{
  constructor(vm, data, callback) {
    this.vm = vm;
    this.getter = data;//拿到data，后续触发getter时拿到值收集依赖
    this.callback = callback;
    this.value = this.get();
  }
  get() {
    window.target = this;
    const value = this.getter.call(this.vm);
    window.target = undefined;
    return value;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.callback.call(this.vm,this.value,oldValue);
  }
}