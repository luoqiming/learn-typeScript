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
// 类
// es6中的类的方法
// 使用class创建类，使用constructor定义函数。使用new来调用class生成新实例，会自动调用构造函数
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
// 类的继承，使用extends关键字实现继承，在子类中使用super关键字调用父类的属性和方法
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'Meow, ' + _super.prototype.sayHi.call(this); // 调用父类的 sayHi()
    };
    return Cat;
}(Animal));
var c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
// 存取器
// 使用getter和setter来控制赋值和读取行为
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return "访问了get";
        },
        set: function (val) {
            console.log("\u8BBF\u95EE\u4E86set\uFF0C\u503C\u662F" + val);
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var lqm = new Student("lqm"); //调用constructor函数，初始化的时候调用了一次set
console.log(lqm.name); //调用get
// 静态方法
// 使用static关键字来定义静态的方法，静态的方法不需要实例化，直接通过class调用
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
    }
    Color.sayColor = function () {
        console.log(this.color);
    };
    return Color;
}());
Color.sayColor(); //undefined  因为是静态方法，class中的color属性还没有实例化
// es7中的类的特性 在es7中，类也有一些特性，ts已经实现了
// 1.实例属性，es6的实例属性只能在constructor函数中使用this.xxx=xxx来定义,而es7的实例属性能够直接在class中定义
// 2.静态属性，通过static关键字定义，直接使用class就可以访问
var Person = /** @class */ (function () {
    function Person() {
        this.name = "zmy"; //直接在class中定义实例属性
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    Person.gender = "female"; //静态属性，直接通过class访问
    return Person;
}());
var zmy = new Person();
zmy.sayName(); //zmy
console.log(Person.gender);
// typescript中的class用法
// public private 和 protected 三种修饰符
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
var Bag = /** @class */ (function () {
    function Bag(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
    return Bag;
}());
var cutton = new Bag("the north face", 200, 20);
console.log(cutton.name);
cutton.name = "the north face changed"; //因为name是public属性，所以能够在class外部被修改
console.log(cutton.name);
console.log("price是", cutton.price); //price报错，在ts中无法访问。  但是在编译之后的js代码中，仍然可以访问，ts并没有对此作出限制
console.log("size是", cutton.size); //size报错，因为是protected
var Zyz = /** @class */ (function (_super) {
    __extends(Zyz, _super);
    function Zyz(name, price, size) {
        var _this = _super.call(this, name, price, size) || this;
        console.log("子集的price", _this.price); //由于price是private的，所以报错，在子集中无法访问
        console.log("子集的size", _this.size); //size是protected 所以可以在子集中访问。
        return _this;
    }
    return Zyz;
}(Bag));
var zyz = new Zyz("zyz", 140, 29);
// readonly关键字，只允许出现在属性签名或者签名索引当中
var Time = /** @class */ (function () {
    function Time(time) {
        this.time = time;
    }
    return Time;
}());
var day = new Time("2019");
day.time = "2490"; //报错，因为time是readonly的
console.log(day.time);
// 抽象类
// abstract 用于定义抽象类和方法
// 注意：抽象的类不能够实例化，
// 并且抽象的类中的抽象方法只能由子类来实现
var PC = /** @class */ (function () {
    function PC(name) {
        this.name = name;
    }
    return PC;
}());
var Asus = /** @class */ (function (_super) {
    __extends(Asus, _super);
    function Asus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 子类来实现抽象类中的方法
    Asus.prototype.sayName = function () {
        console.log(this.name);
    };
    return Asus;
}(PC));
var fdg = new Asus("fdg");
console.log(fdg);
