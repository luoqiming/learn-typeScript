// 联合类型
// 可以设定多个类型，取值可以是其中的一种
let a11: string | number = 434;
a11 = "string";


// 访问联合类型的属性或者方法
// 只能访问联合类型中每个类型共有的属性或者方法
function unionFun(num: number | string): any {
    // return num.length; 这里会报错，因为ts不能确定传入的参数到底是哪个类型的，调用的方法可能会报错。
    return num.valueOf();
}

