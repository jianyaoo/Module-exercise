// 箭头函数
// 1 - return 的注意
// 当只有一条语句时，默认有 return
let sum = (a,b) => a+b;
console.log(sum(1,2));
// 当直接返回一个对象时，需要使用大括号括起来对象
let sum2 = () => ({a:1});
console.log(sum2());

// 2- this
// 关于this：在箭头函数中，this是固定的，表示在声明式所所在的对象
function foo() {
    setTimeout(()=>{
        console.log(this.id)
    },100);
}
let id = 21;
foo.call({id:42})

let id2 = 211;
function foo2() {
    setTimeout(function () {
        console.log(this);
        console.log(this.id)
    },100)
}

foo2.call({id2:422})

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setTimeout(() => this.s1++, 1000);
    // 普通函数
    setTimeout(function () {
        console.log(this.s2);
        this.s2++;
    }, 1000);
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

// 在需要使用动态this和静态this时都不太适合使用箭头函数

