// 捕获属性拦截
// Proxy的基本用法
// 2015以前的实现
let obj1 = {a: 1}
let temp = null;
Object.defineProperty(obj1, 'a', {
  set(value) {
    console.log("set");
    temp = value;
  },
  get(value) {
    console.log('get');
    return temp;
  }
})

obj1.a = 2;
console.log(obj1.a)

// 2015的实现：proxy
let obj = new Proxy({}, {
  get(target, p, receiver) {
    console.log(`getting ${p}`);
    return Reflect.get(target, p, receiver)
  },
  set(target, p, value, receiver) {
    console.log(`setting：${p}`);
    return Reflect.set(target, p, value, receiver)
  }
})
obj.count = 1;
++obj.count

//

// Proxy vs object.defineProperty
// 1 - 更多的对象操作
// 01 - get()
// 02 - set()
// 03 - has()
// 04 - ownKeys();
// 05 - getOwnPropertyDescriptor()
// 06 - defineProperty()
// 07 - preventExtensions()
// 08 - getPrototyOf()
// 09 - isExtensible
// 10 - setPrototyof()
// 11 - apply()
// 12 - construct()

// 2 - 数组对象的监视

// 3 - 以非入侵的方式监听
