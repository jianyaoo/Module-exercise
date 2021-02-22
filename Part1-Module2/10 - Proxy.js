// 捕获属性拦截
// 2015以前的实现
let obj1 = {a:1}
let temp = null;
Object.defineProperty(obj1,'a',{
  set(value){
    console.log("set");
    temp = value;
  },
  get(value){
    console.log('get');
    return temp;
  }
})

obj1.a = 2;
console.log(obj1.a)

// 2015的实现：proxy
let obj2 = {a:1}
let obj = new Proxy({},)


// Proxy的基本用法

// Proxy vs object.defineProperty
// 1 - 更多的对象操作

// 2 - 数组对象的监视

// 3 - 以非入侵的方式监听
