// 枚举
// 使用enum关键字
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["yellow"] = 2] = "yellow";
    colors[colors["black"] = 3] = "black";
    colors[colors["green"] = 4] = "green";
})(colors || (colors = {}));
;
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(colors[0] === "red"); //true
console.log(colors[1] === "blue"); //true
console.log(colors[2] === "yellow"); //true
// 反向映射
console.log(colors["red"] === 0); //true
console.log(colors["green"] === 4); //true
// 手动赋值
// 可以为枚举中的每一项手动赋值
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 7] = "tuesday";
    days[days["wednesday"] = 8] = "wednesday";
    days[days["thursday"] = 9] = "thursday";
    days[days["friday"] = 10] = "friday";
})(days || (days = {}));
// 其他没有被手动赋值的，将会接着上一个递增，每次递增总是+1
console.log(days["monday"]); //0
console.log(days["tuesday"]); //7，  因为给了tuesday手动赋值为7
console.log(days["wednesday"]); //8
console.log(days["thursday"]); //9
// 注意：手动赋值的时候有可能会让值重复，ts并不会阻止这种情况，所以需要我们自己注意
//  常数项和计算所得项
// 以上的枚举的每一项其实是常数项
// 下面的Blue是计算所得项
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
console.log("计算所得项", Color["Blue"]);
console.log(0 /* top */); //0  输出0是因为常数枚举在编译阶被段删除了，但是ts默认输出他的索引
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions); //undefined  因为外部枚举在编译时被删除了，完全不会被写进结果
