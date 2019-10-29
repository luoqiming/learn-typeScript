// 接口
// ts中使用接口来定义对象的类型

// 定义一个接口：
// 1.interface关键字 
// 2.接口首字母大写
interface Person {
    name: string,
    age: number
}

// 这样lqm的类型便是我们定义的Person
// lqm的形状必须和Person一致，比接口多或者少属性都是不允许的
let lqm: Person = {
    name: "lqm",
    age: 13,
    // gender:"male" 添加未定义的属性是不行的
}

// 可选属性
// 如果我们希望接口中的一些属性是可选的，通过一个?来标记他是可选的属性
interface School {
    name: string,
    adr?: string //adr可选
}

// adr属性是可选的，因此可以不写
let highSchool: School = {
    name: "科利华中学",
    // no: 1       但是未定义的属性依然不能添加
}


// 任意的属性
interface Tree {
    name: string,
    color: string,
    [propName: string]: any  // 如果我们希望接口可以定义任意的属性
    // [propName: string]: number  这里任意的属性类型是number，所以之前的name/color属性不是他的子集，会报错
}
// 注意定义了任意属性过后，必须的属性也是属于任意属性中的，因此如果必须属性的类型不属于任意属性的类型，ts会报错

let greenTree: Tree = {
    name: "greenTree",
    color: "green",
    tall: 123  //因为接口允许添加任意的属性，所以tall属性添加成功
}


// 只读的属性
// 如果希望在定义对象之后就不能修改属性，需要在接口中设为只读
interface Fish {
    readonly name: string,
    width: number
}

let salmon: Fish = {
    name: "salmon",
    width: 5454
}

// salmon.name = "ffd"    这里要修改name 属性时报错，因为已经在接口中将name属性设置为了readonly






