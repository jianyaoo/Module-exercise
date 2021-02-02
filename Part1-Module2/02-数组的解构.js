// 数组解构
const arr = [100, 200, 300];

const [a, b, c] = arr;
console.log(a, b, c);

// 解构剩余所有成员
const [first, ...rest] = arr;
console.log(first);
console.log(rest);

// 解构设置默认值
const [z = 1, x, v, n = 4] = arr;
console.log(z, x, v, n);

// 解构部分值
const [q, w] = arr;
console.log(q, w);

// 解构值多余数组值
const [s,d,f,g,h] = arr;
console.log(s,d,f,g,h);
