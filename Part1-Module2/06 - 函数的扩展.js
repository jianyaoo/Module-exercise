// 参数默认值
// ES5的处理方法
function log(x, y) {
  y = y || 'world';
  console.log(x, y);
}

log('hello');
log('hello', 'China');
log('Hello', ''); // 当传递的值为false时被屏蔽；

console.log("=======Log2");

function log2(x, y) {
  if (y === undefined) {
    y = 'world'
  }
  console.log(x, y);
}

log2('hello');
log2('hello', 'China');
log2('Hello', '');

console.log("=======Log3");

// ES6的处理方法
function log3(x, y = 'World') {
  console.log(x, y);
}

log3('hello');
log3('hello', 'China');
log3('Hello', '');

// 优点：
// 1 - 可以立即意识到哪些参数是可以省略的
// 2 - 后期优化代码时即使拿掉某个参数也是不影响代码运行的

// 注意点：
// 1 - 不能在函数体中使用let 或 const 重新声明
// 2 - 如果赋值后就不能出现相同的参数名称
// 3 - 如果是计算值，则在每次调用的时候都会重新计算
// 4 - 一般默认值放在最后，因为放在前面的话，没有办法实现前面不传参而后面参数传参，除非显示传入undefined

// 任意个数的参数
// ES2015以下的处理 - 使用arguments
function numberSort1() {
  return Array.from(arguments).sort();
}

console.log(numberSort1(1, 2, 7, 3, 4, 9));

// ES2015的处理方式
function numberSort2(...rest) {
  return rest.sort();
}

console.log(numberSort2(1, 4, 2, 5, 8, 3));

// 注意点：
// 1 - rest参数只能放在最后，否则会报错
// 2 - rest参数不包含在 function.length中




