// 类
class Animal {
    private name; 
    constructor(name) {
        this.name = name;
    }
}

let cat = new Animal("cat");
cat.name = "656565"
console.log(cat.name);