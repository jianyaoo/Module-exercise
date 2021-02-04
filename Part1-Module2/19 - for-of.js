// for --- 数组

// for-in --- 键值对

// 数组的遍历方法

// for-of：遍历所有数据的统一方式：可迭代的数据
// forEach 不能终止循环，但是for-of可以使用break
// 可以遍历伪数组、Set结构、Map结构

// Iterable接口 - 可迭代接口
// 实现Iterable接口是 可以使用 for-of 的前提

// 在数据中挂载 Iterator 方法：维护了数据的一个指针

// for-of的执行原理

// 关于Iterator接口是什么？

// 实现可迭代接口，使对象可以使用for-of
// Iterable接口 -> Iterator() -> IterationResult()

// 实现迭代器的目的：迭代器模式
// 核心：对外实现统一遍历的接口，使调用者不用关系原始的数据结构
