// 声明语法
// 我们在使用一些第三方库的时候，例如jquery，ts的编译器并不知道，$或者Jquery是什么东西。
// 这个时候我们需要使用声明语法去告诉ts。
// 这里的declare var在ts编译的时候并不会真正的声明一个变量，而是告诉了ts，jQuery的类型，
declare var jQuery: (selector: string) => any;

// 1.使用全局变量模式的声明文件使用方法：
// 那么通常我们会将这一类的语法单独放在一个文件中，这就是声明文件
// 声明文件必须以d.ts为后缀
// ts会解析项目中的所有的.ts后缀的文件，当然也包含了声明文件
// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件。
// 一般来说很多库的声明文件都已经被定义好了，我们可以直接下载使用


// 2.使用npm来管理声明文件

// 那么对于模块化的方式，有两种方式获取声明文件
// ①npm包自带了声明文件
//判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。


// ②安装@types
// 以jquery为例：
// npm install @types/jquery --save-dev


// ③如果都没有，那就需要自己写了











