// 字符串字面量类型
// 和类型别名一样，也是通过type来进行定义的
type eventName = "click" | "mouseover" | "keydown";
function doEvent(event: eventName) {
    console.log(event);
}

doEvent("click");

// doEvent("hide");  报错，应为不符合定义的字符串字面量类型