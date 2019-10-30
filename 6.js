// 函数的类型
// 1.函数声明
// 直接在参数后面跟类型来限制参数的类型,在参数的括号之后限制函数返回值的类型
// 注意在ts中,函数参数有几个调用的时候就必须写入几个,否则会报错
// 与接口中相同,使用?来表示可选参数，但是可选参数必须在最后
function isFun(param1, param2) {
    return (param1 + param2).toString();
}
// 2.函数表达式
// 这样写其实是可以的，但是由于是函数表达式 fun1的类型其实是由ts推断出来的.
var fun1 = function (data1, data2) {
    return data1 + data2;
};
// 如果我们需要给函数表达式添加类型，那么应该是这么写:
// 注意这里的箭头函数和es6的箭头函数不是同一个东西，这里表示返回值
var fun2 = function (data1, data2) {
    return data1 + data2;
};
var fun3 = function (param1, param2) {
    return param1 + param2;
};
// 4.剩余参数(rest参数)
function fn4(data1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(rest);
}
fn4(1, 5, "87", 54);
