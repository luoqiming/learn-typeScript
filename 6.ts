// 函数的类型
// 1.函数声明

// 直接在参数后面跟类型来限制参数的类型,在参数的括号之后限制函数返回值的类型
// 注意在ts中,函数参数有几个调用的时候就必须写入几个,否则会报错
// 与接口中相同,使用?来表示可选参数，但是可选参数必须在最后
function isFun(param1: number, param2?: number): string {
    return (param1 + param2).toString();
}


// 2.函数表达式
// 这样写其实是可以的，但是由于是函数表达式 fun1的类型其实是由ts推断出来的.
let fun1 = function (data1: string, data2: number): any {
    return data1 + data2;
}

// 如果我们需要给函数表达式添加类型，那么应该是这么写:
// 注意这里的箭头函数和es6的箭头函数不是同一个东西，这里表示返回值
let fun2: (data1: number, data2: number) => number = function (data1: number, data2: number): number {
    return data1 + data2;
}


// 3.利用接口来对函数进行类型的规定
interface funtype1 {
    (data1: string, data2: string): string
}

let fun3: funtype1 = function (param1, param2) {
    return param1 + param2;
}


// 4.剩余参数(rest参数)
function fn4(data1: number, ...rest: any[]) {
    console.log(rest);
}

fn4(1, 5, "87", 54);


// 5.重载
// js中是没有重载的，我们通常可以通过argument来判断类型或是长度，实现不同的功能


// 在ts中，我们可以直接使用联合类型来实现不同的功能
function reverse1(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 也可以使用重载
// 也可以直接定义多个同名函数，但是参数类型不同，ts会自己匹配
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


// 类型断言
// 例如在联合类型的函数中，我们需要判定参数的类型，通常使用typeof操作符，来实现不同的类型实现不同的功能
// ts中还存在类型断言，将变量断言成某一类型
// 语法是  <type> 或者是  值as 类型（在react的jsx的ts版本中只能使用这种语法）
function getLength(something: string | number): number {
    // 这里是类型断言
    if ((<string>something).length) {
        // 这里也是类型断言
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

// 注意：类型断言不是类型转换，将其断言为一个不存在的类型是 不可以的。
// 例如上数函数，只能断言成string或者是number






