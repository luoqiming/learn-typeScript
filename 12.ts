// 枚举
// 使用enum关键字
enum colors { "red", "blue", "yellow", "black", "green" };
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(colors[0] === "red"); //true
console.log(colors[1] === "blue"); //true
console.log(colors[2] === "yellow"); //true

// 反向映射
console.log(colors["red"] === 0); //true
console.log(colors["green"] === 4); //true

// 手动赋值
// 可以为枚举中的每一项手动赋值
enum days { "monday", "tuesday" = 7, "wednesday", "thursday", "friday" }
// 其他没有被手动赋值的，将会接着上一个递增，每次递增总是+1
console.log(days["monday"]) //0
console.log(days["tuesday"]) //7，  因为给了tuesday手动赋值为7
console.log(days["wednesday"]) //8
console.log(days["thursday"]) //9
// 注意：手动赋值的时候有可能会让值重复，ts并不会阻止这种情况，所以需要我们自己注意


//  常数项和计算所得项
// 以上的枚举的每一项其实是常数项
// 下面的Blue是计算所得项
enum Color { Red, Green, Blue = "blue".length };
console.log("计算所得项", Color["Blue"]);

// enum Color {Red = "red".length, Green, Blue}; 报错，因为计算所得项在第一个，后面的常数项没有办法获得初始值，必须手动赋值


// 常数枚举
// 使用 const enum来定义枚举
// 注意：常数枚举与普通枚举的区别是 他们会在编译阶段删除，并且枚举项不能够包含计算所得项
const enum direction {
    top,
    left,
    right,
    down
}
console.log(direction.top);//0  输出0是因为常数枚举在编译阶被段删除了，但是ts默认输出他的索引


// 外部枚举，使用 declare enum
// 之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions)//undefined  因为外部枚举在编译时被删除了，完全不会被写进结果

