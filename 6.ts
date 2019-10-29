// 函数的类型
// 1.函数声明

// 直接在参数后面跟类型来限制参数的类型,在参数的括号之后限制函数返回值的类型
// 注意在ts中,函数参数有几个调用的时候就必须写入几个,否则会报错
// 与接口中相同,使用?来表示可选参数
function isFun(param1: number, param2?: number): string {
    return (param1 + param2).toString();
}
