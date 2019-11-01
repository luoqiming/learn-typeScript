// 类和接口
// 之前说到过接口可以用来定义对象的形状，那么接口还有另外的一个用途，就是用来抽象不同的类中相同的部分

// 简单来说，一个pc的类可以上网，华硕pc继承自pc类也能够上网，但是这里有一个不同的类，手机类，而手机类也能够上网。
// 对于不同的类，相同的功能，我们可以用接口抽象出来

interface Net {
    link();
}

interface Email {
    sendEmail();
}

class Pc implements Net {
    constructor(name) {
        this.name = name;
    }
    name;
    link() {
        console.log(`${this.name}正在上网`);
    }
}

// 一个类能够实现多个接口/实现了Net和Email接口
class Asus extends Pc implements Net, Email {
    constructor(name) {
        super(name);
    }
    sendEmail() {
        console.log(`${this.name}正在发送email`);
    }
}


let asus_pc = new Asus("华硕");
asus_pc.link();


// 接口继承接口
interface Tree {
    color: "green",
    height: 200,
}

interface GreenTree extends Tree {
    type: "33"
}


// 接口继承类
class Point {
    x: number
    y: number
}

interface Point3D extends Point {
    z: number
}

let point3d: Point3D = {
    x: 12,
    y: 43,
    z: 99999
};




