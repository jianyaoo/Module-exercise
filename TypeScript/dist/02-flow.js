//

// 通过类型注解的方式检测 类型注解
function sum(a       ,b       ){
  return a+b;
}

sum(100,100);

sum('100','100');

// 类型注解只在编码阶段有意义，在运行时需要移除掉
// 第一种方式：flow-remove-types
// 第二种方式：babel配合preset-flow插件
