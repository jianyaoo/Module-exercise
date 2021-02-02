// 对象解构
let obj = {
  name: 'lg',
  age: 18
};

let {name, age} = obj;
console.log(name, age);

// 没有匹配值
let {name2, age2, address} = obj;
console.log(name2, age2, address);

// 设置默认值
let {name:name3, age:age3, address3 = "北京"} = obj;
console.log(name3, age3, address3);

// 解构设置别名
let {name:myName , age:myAge , address:myAddress = "海淀" } = obj;
console.log(myName,myAge,myAddress)

