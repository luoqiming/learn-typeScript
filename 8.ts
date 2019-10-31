// 内置对象
// js中有很多内置对象，我们在ts中能够直接将类型指定为这些对象
// 例如：RegExp/Date等

// 将time类型指定为Date对象
let time: Date = new Date();

// 将zz的类型指定为正则对象
let zz: RegExp = /^[1-9]$/;

// bom和dom中的内置对象
// 例如：NodeList Event HTMLElement

// 将dum类型指定为HTMLElement
let dum: HTMLElement = document.body;

// 将ele的类型指定为NodeList
let ele: NodeList = document.querySelectorAll("p");