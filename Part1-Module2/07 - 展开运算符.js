// 展开数组
// 2015以下的实现
function sum(a, b, c) {
  return a + b + c;
}

let args = [1, 2, 3];

console.log(sum.apply(null, args));


// 2015的实现
function sum2(a,b,c){
  return a + b + c;
}
console.log(sum2(...args));

// 展示对象
let z = {a:3,b:4};
let n = {...z};
console.log(n);

let foo = {...[1,2,3]}
console.log(foo);
