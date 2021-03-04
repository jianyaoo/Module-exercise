// @flow

// 通过类型注解的方式检测 类型注解
function sum(a:number,b:number){
  return a+b;
}

sum(100,100);

sum('100','100');

// 类型注解只在编码阶段有意义，在运行时需要移除掉

// flow相关的开发工具插件
