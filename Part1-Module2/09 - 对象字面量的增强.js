// 1 - 变量名和变量值相同
let a = 'hello', b = 'world';
let obj = {
  a,
  b
}
console.log(obj);

// 2 - 动态添加属性名：计算属性名
let n1 = 'name';
let obj2 = {
  [n1]:'foo'
}
console.log(obj2);

// 动态属性名
let lastName = 'last name';
let person = {
  'first name':"july",
  [lastName]:'Kun'
}

console.log(person['last name']);
console.log(person[lastName]);

// 动态方法名
let person2 = {
  ['h'+'ello'](){
    console.log('hello world')
  }
}
person2.hello();

// 3 - 扩展方法：
// Object.assign()
let target = {a:1};
let source1 = {b:1};
let source2 = {c:1};
Object.assign(target,source1,source2);
console.log(target);

// 拷贝原则：只拷贝对象自身可枚举的属性，不拷贝原型属性及自身不可枚举的属性（enumerable：false），其他属性都可以拷贝，symbol属性也可以
// 关于源对象：如果源对象不是对象，则首先会先转换成对象，如果不能转换成对象，则会直接跳过
// 以下源对象中 只有 字符串和数组会并入
let source3 = 'foo';
let source4 = 123,source5=true,source6=[4,5,6],source7=undefined,source8=null;
Object.assign(target,source3,source4,source5,source6,source7,source8);
console.log(target);

// 关于assign的拷贝：
// 01 - 浅拷贝
// 02 - 同名属性的替换
let target2 = {a:{b:'hooo'}};
let source21 = {a:'haha'};
Object.assign(target2,source21)
console.log(target2);

// 03 - 对数组的处理：会把数组转成成对象后处理
let target3 = [1,2,3];
let source31 = [4,5];
Object.assign(target3,source31);
console.log(target3);

// 04 - 对取值函数的处理 - 不会赋值取值函数，会计算后拿到结果复制过去
let target4 = {};
let source41 = {
  get foo(){
    return 1;
  }
}
Object.assign(target4,source41);
console.log(target4);

// 应用场景：
// 01 - 复制对象
// 只克隆自身属性
function clone(origin){
  return Object.assign({},origin)
}
// 克隆自身属性和继承属性
function clone(origin){
  return Object.assign(
    Object.create(Object.getPrototypeOf(origin)),
    origin
  )
}

// 02 - 设置默认值
const defaultOptions = {
  logLevel:1,
  name:'log'
}

function test(options){
  options = Object.assign({},defaultOptions,options)
  // ...
}

// Object.is()
// 01 - 计算结果与 三等基本相同
// 02 - 不同之处： +0 !== -0 , NAN = NAN
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));

console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));


