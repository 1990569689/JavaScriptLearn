/*
通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

JavaScript 能够改变页面中的所有 HTML 元素
JavaScript 能够改变页面中的所有 HTML 属性
JavaScript 能够改变页面中的所有 CSS 样式
JavaScript 能够对页面中的所有事件做出反应
查找 HTML 元素
通常，通过 JavaScript，您需要操作 HTML 元素。

为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：

通过 id 找到 HTML 元素
通过标签名找到 HTML 元素
通过类名找到 HTML 元素
通过 id 查找 HTML 元素
在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。
本例查找 id="intro" 元素：
*/
//找到div id
var x = document.getElementById("main");
//找到div 中的p
var y = x.getElementsByTagName("p");
//找到class
x = document.getElementsByClassName("main");
//在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。
/*
改变 HTML 内容
修改 HTML 内容的最简单的方法是使用 innerHTML 属性。

如需改变 HTML 元素的内容，请使用这个语法：

document.getElementById(id).innerHTML=新的 HTML
改变 HTML 属性
如需改变 HTML 元素的属性，请使用这个语法：

document.getElementById(id).attribute=新属性值
改变 HTML 样式
如需改变 HTML 元素的样式，请使用这个语法：

document.getElementById(id).style.property=新样式
*/

/*
<button id="myBtn">点这里</button>
<script>
document.getElementById("myBtn").onclick=function(){displayDate()};
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
</script>

*/



