// Reflect
// 为什么要有一个Reflect？统一提供了一套用于操作对对象的API
// 01 - 将Object对象的一些明显属于语言内部的方法
//      比如Object.defineProperty，放到Reflect对象上
// 02 - 修改某些Object方法的返回结果，让其变得更合理。
//      比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。
// 03 - 让Object操作都变成函数行为。
//      某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)
// 04 - Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
//      这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。

// Reflect的十三个方法及对应的方法
//   Reflect.apply();
//   Reflect.construct();
//   Reflect.get(target,name,receive) - 查找并返回target对象的name属性，如果没有该属性则返回undefined
let obj11 = {
  a: 1,
  b: 2,
  get c() {
    return this.a + this.b;
  }
}

console.log(Reflect.get(obj11, 'a'));
console.log(Reflect.get(obj11, 'c'));
console.log(Reflect.get(obj11, 'd'));
//   Reflect.set()
//   Reflect.defineProperty();
//   Reflect.deleteProperty();
//   Reflect.has();
//   Reflect.ownKeys();
//   Reflect.isExtensible();
//   Reflect.preventExtensions();
//   Reflect.getOwnPropertyDescriptor();
//   Reflect.getPrototypeOf();
//   Reflect.setPrototypeOf();
