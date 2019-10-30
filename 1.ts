// 在js中有6中基本的数据类型：1.Boolean 2.number 3.string 4.undefined 5.null 6.symbol
// 那么在ts中，使用英文冒号去规定变量的类型

// 1.Boolean
let isShow: boolean = false;

// 注意使用构造函数是错的，值是对象
// let isActive: boolean = new Boolean(false);

// 2.number
// 注意NAN和Infinity也是number类型
let time: number = 12;
let time2: number = NaN;
let time3: number = Infinity;

// 3.字符串
let pwd: string = "sds542";
let pwd_num: number = 665;
// 使用模板字符串也是可以的
let pwd2: string = `dsfsdfsd${pwd_num}`;

// 4.空值
// js中没有空值的概念
// 但是在ts中声明一个空值变量没有什么用，因为它只能赋值为undefined或者null
let unusable: void = undefined;

// 但是函数没有返回值可以使用void来标记
function noReturn(): void {
    console.log("没有返回值");
}


// 5.null和undefined，可以使用这两个值来定义原始变量
let a: undefined = undefined;
let a2: undefined;//简写
let a3: null = null;
let a4: null;
// 但是注意，null和undefined是其他类型的子集,但是void不可以
let b: string = undefined;
let b2: number = undefined;
let b3: number = null;

