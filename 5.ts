// 数组的类型

//1. [类型+方括号]来表示

// 表示数组，并且数组内的每一项只能时number类型
let arr1: number[] = [1, 2, 3, 4];

// 同样也是数组，但是每一项必须是string
let arr2: string[] = ["1", "2"];

// 2.也可以用数组泛型来表示数组
let arr3: Array<number> = [1, 1, 2, 3, 5]; //更多看泛型


// 3.用接口来表示数组
// 不常用，一般用来表示类数组
interface NumberArr {
    [index: number]: number //这里表示索引是number类型的时候，值必须也是number类型
}
let arr4: NumberArr = [1, 3, 6, 8, 9];

// 4.类数组
// 我们都知道argument是一个类数组
function argu_fun(): any {
    // let argu: number[] = arguments   这么写报错，因为arguments不是数组,我们应该用接口
    // ts已经帮我们写好了很多内置的类数组的接口，称为内置对象
    // arguments 的内置对象是IArguments 
    let argu: IArguments = arguments;
}


// 5.任意类型的数组
// 如果数组内允许任意类型该怎么写?
// 通过any
let arr5: any[] = [1, "54", { "name": "lqm" }];