// 在数组中的应用

// 2015以下的实现
let args = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum.apply(null, args));

// 2015的实现
function sum2(a,b,c){
  return a + b + c;
}
console.log(sum2(...args));

// 其他应用
// 01 - 复制数组
// 注意：展开运算符是浅拷贝，只能复制一层数据，成员依旧是原始数据的引用
let a1 = [1,2];
let a2 = a1;
let a3 = [...a1];
console.log(a1 === a2);
console.log(a1 === a3);

// 在ES5中复制数组
let a11 = [1,2];
let a22 = a11.concat();
console.log(a11 === a22);

// 在 ES6中复制数组
let a12 = [1,2];
let a23 = [...a12];
console.log(a12 === a23);

// 02 - 合并数组
// 在 ES5中的实现
let b1 = [1,2,3];
let b2 = [4,5];
let b3 = b1.concat(b2);
console.log(b3);

// 在ES6中的实现
let b11 = [1,2,3];
let b22 = [4,5];
let b33 = [...b11 , ...b22];
console.log(b33);

// 03 - 配合解构赋值使用
// ES5
let list = [1,2,3,4,5];
let a = list[0];
let rest = list.slice(1);
console.log(a,rest)

// ES6
let [q1,...qrest] = list;
console.log(q1,qrest);

// 04 - 对字符串的操作
let string1 = 'hello';
console.log([...string1]);
console.log([...string1].length);

// 计算字符串的长度
// 正常情况下 js会将四个字节的Unicode字符识别为两个字符，采用扩展运算符计算则不会存在这种问题
// 在涉及到含有四个字节的Unicode字符时都存在该问题，所以建议统一采用扩展运算符计算。
let unicodeArr = 'x\uD83D\uDE80y';
console.log(unicodeArr.length);
console.log([...unicodeArr].length)

// 05 - 对任何实现了Iterator接口的对象都可以将其转换为真正的数组。

// 在对象中的应用，在ES2018中将运算符引入到了对象中
// 取出参数对象中所有可遍历属性，拷贝到当前对象中
let z = {a:3,b:4};
let n = {...z};
console.log(n);

// 数组是特殊的对象，也可以进行操作
let foo = {...[1,2,3]}
console.log(foo);

// 解构赋值
// 01 - 解构的必须是对象，如果等号右边是 undefined 或者 null 时，运行报错
// let {...v1} = null;
// let {...v2} = undefined;
// console.log(v1);
// console.log(v2);

// 02 - 解构赋值必须是最后一个参数，否则会报错

// 03 - 在对象中的解构赋值同样是浅拷贝
let n1 = {
  a:{
    b:1
  }
}
let {...n2} = n1;
n1.a.b = 3;
console.log(n2);

// 04 - 解构赋值不能复制继承自原型对象的属性
let m1 = {a:1};
let m2 = {b:2};
m2.__proto__= m1;
let {...m3} = m2;
console.log(m3);
console.log(m3.a);

let m4 = Object.create({x:1,y:2});
m4.z = 3;
let {...m5} = m4;
console.log(m4);
console.log(m4.__proto__)
console.log(m5);

// 扩展运算符：用于取出对象中所有可遍历的属性，拷贝到当前对象中
// 说明1 - 如果后面跟的不是对象，会把该值转换为对象
// 说明2 - 拷贝对象 - 拷贝实例属性
let aClone = {...m2};
let aClone2 = Object.assign({},m2);
console.log(aClone);
console.log(aClone.__proto__);
console.log(aClone2);

// 拷贝全部对象
let aClone3 = Object.assign(
    Object.create(Object.getPrototypeOf(m4)),
    m4
);
let aClone4 = Object.create(
    Object.getPrototypeOf(m4),
    Object.getOwnPropertyDescriptors(m4)
);
let aClone5 = {
  __proto__:Object.getPrototypeOf(m4),
  ...m4
};
console.log(aClone3);
console.log(aClone3.__proto__);
console.log(aClone4);
console.log(aClone4.__proto__);
console.log(aClone5);
console.log(aClone5.__proto__);
