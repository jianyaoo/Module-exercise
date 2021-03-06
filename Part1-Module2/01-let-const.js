// 使用var声明变量
if (true) {
  var foo = "abcd";
}
console.log(foo);

//------------------------------------------------

// let
if (true) {
  let bar = "abcd";
  console.log(bar);
}

//------------------------------------------------
// let 关键字
// 1 - 块级作用域
// 2 - 作用域不会提升

// 解决问题 1 - 循环嵌套，变量覆盖问题
// 输出结果：3,3,3
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100)
}

// 输出结果：1,2,3
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100)
}


// 解决问题2 - 计数器问题
// 使用闭包解决
function countNumber(){
  let count = 0;


}

// 使用let解决

// const 关键字
// 1 - 只读特性
// 2 - 声明后必须赋值
// 3 - 声明后不能被修改内存地址

// 声明变量的三种方式：var + const + let
// 最佳实践方式：少用var，主用const、配合let
