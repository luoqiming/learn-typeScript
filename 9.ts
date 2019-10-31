// ts进阶
// 类型别名
// 使用type关键字创建类型别名，常用在联合类型中

type type_number = number;
type type_string = string;
type s_n = type_number | type_string;
function fu11(data1: s_n): string {
    if (typeof data1 == "string") {
        return data1;
    }
    else {
        return data1.toString();
    }
}