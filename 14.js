// 类和接口
// 之前说到过接口可以用来定义对象的形状，那么接口还有另外的一个用途，就是用来抽象不同的类中相同的部分
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pc = /** @class */ (function () {
    function Pc(name) {
        this.type = "fdfd";
        this.name = name;
    }
    Pc.prototype.link = function () {
        console.log(this.name + "\u6B63\u5728\u4E0A\u7F51");
        console.log(this.type);
    };
    return Pc;
}());
// 一个类能够实现多个接口/实现了Net和Email接口
var Asus = /** @class */ (function (_super) {
    __extends(Asus, _super);
    function Asus(name) {
        return _super.call(this, name) || this;
    }
    Asus.prototype.sendEmail = function () {
        console.log(this.name + "\u6B63\u5728\u53D1\u9001email");
    };
    return Asus;
}(Pc));
var asus_pc = new Asus("华硕");
asus_pc.link();
// 接口继承类
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = {
    x: 12,
    y: 43,
    z: 99999
};
