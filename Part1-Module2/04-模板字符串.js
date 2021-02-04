// 模板字段传

// 1 - 支持字符串内换行
let string1 = `<div>
    这是第一行数据
    
    这是第二行数据
</div>`
console.log(string1);

// 2 - 插值语法：变量值和js表达是
let name = 'Tom'
let string2 = `hi,my name is ${name}`;
console.log(string2);

// 3 - 带标签的模板字符串：对输出的内容进行处理
let string3 = `hi,do you know 1 + 2 = ${1 + 2}`;
console.log(string3);

let today = 'wording';
let string4 = `hi,Today is ${today === 'working' ? '工作日' : '休息日'}`;
console.log(string4);

