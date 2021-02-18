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
