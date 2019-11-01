// 类
// es6中的类的方法
// 使用class创建类，使用constructor定义函数。使用new来调用class生成新实例，会自动调用构造函数
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack


// 类的继承，使用extends关键字实现继承，在子类中使用super关键字调用父类的属性和方法
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom


// 存取器
// 使用getter和setter来控制赋值和读取行为
class Student {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return "访问了get";
    }
    set name(val) {
        console.log(`访问了set，值是${val}`);
    }
}

let lqm = new Student("lqm"); //调用constructor函数，初始化的时候调用了一次set

console.log(lqm.name);//调用get

// 静态方法
// 使用static关键字来定义静态的方法，静态的方法不需要实例化，直接通过class调用
class Color {
    constructor(color) {
        this.color = color;
    }
    static sayColor() {
        console.log(this.color);
    }
}

Color.sayColor(); //undefined  因为是静态方法，class中的color属性还没有实例化



// es7中的类的特性 在es7中，类也有一些特性，ts已经实现了
// 1.实例属性，es6的实例属性只能在constructor函数中使用this.xxx=xxx来定义,而es7的实例属性能够直接在class中定义
// 2.静态属性，通过static关键字定义，直接使用class就可以访问

class Person {
    name = "zmy";  //直接在class中定义实例属性
    static gender = "female"  //静态属性，直接通过class访问
    sayName() {
        console.log(this.name);
    }
}

let zmy = new Person();
zmy.sayName(); //zmy

console.log(Person.gender);


// typescript中的class用法
// public private 和 protected 三种修饰符
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Bag {
    name;  // 属性默认是public，即使不写public关键字
    private price;  //private关键字意为，私有属性，只能在class内访问，子类也是不能够访问的
    protected size;  //protected关键字作用同private，但是在子类中能访问
    public constructor(name: string, price: number, size: number) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
}

let cutton = new Bag("the north face", 200, 20);
console.log(cutton.name);
cutton.name = "the north face changed"  //因为name是public属性，所以能够在class外部被修改
console.log(cutton.name);

console.log("price是", cutton.price) //price报错，在ts中无法访问。  但是在编译之后的js代码中，仍然可以访问，ts并没有对此作出限制

console.log("size是", cutton.size);//size报错，因为是protected

class Zyz extends Bag {
    constructor(name, price, size) {
        super(name, price, size);
        console.log("子集的price", this.price);   //由于price是private的，所以报错，在子集中无法访问
        console.log("子集的size", this.size);    //size是protected 所以可以在子集中访问。
    }
}

let zyz = new Zyz("zyz", 140, 29);


// readonly关键字，只允许出现在属性签名或者签名索引当中
class Time {
    public readonly time;  //表示time属性不能够被更改，如果有其他的修饰符，readonly需要写在后面
    constructor(time) {
        this.time = time;
    }
}

let day = new Time("2019");
day.time = "2490";  //报错，因为time是readonly的
console.log(day.time);



// 抽象类
// abstract 用于定义抽象类和方法
// 注意：抽象的类不能够实例化，
// 并且抽象的类中的抽象方法只能由子类来实现
abstract class PC {
    name;
    constructor(name) {
        this.name = name;
    }
    abstract sayName();  //抽象类中的抽象方法，只能由子类实现
}

let pc_new = new PC(); //实例化报错，因为抽象类不能实例化

class Asus extends PC {
    // 子类来实现抽象类中的方法
    sayName() {
        console.log(this.name);
    }
}

let fdg = new Asus("fdg");
console.log(fdg);

