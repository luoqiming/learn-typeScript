// 声明合并
// 之前的函数重载，其实就是函数的合并

// 接口的合并
interface Person {
    name: string
}

interface Person {
    // name:number,   //报错无法合并，因为接口中的类型 不一样 一个是number一个是string
    name: string    //不报错，即使类型重复，但是是一样的 所以可以合并
    height: number
}

// 以上会合并为
interface Person {
    name: string,
    height: number
}

// 接口中方法的合并与函数的合并一样
interface Hanshu {
    sayHi(x: number): number;
}

interface Hanshu {
    sayHi(x: string): string;
}

// 以上会合并为
interface Hanshu {
    sayHi(x: number): number;
    sayHi(x: string): string;
}

