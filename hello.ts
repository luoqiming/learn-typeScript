function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

// 开始ts：
// 1.安装 npm install -g typescript

// 2.使用tsc命令编译js文件：tsc hello.ts
// 注意ts只会进行静态的检查，在编译的时候就会报错。但是即使有错误仍然会生成js文件（如果希望有错误不生成js的话，在配置文件中配置）


