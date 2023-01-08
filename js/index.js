//网页弹窗
/*
alert("Hello World");
//JavaScript的变量
var x = 1;
var y = 2;
if (y > x) {
    alert(y);
}
*/
//JavaScript创建数组
var string = [1, 2, 3.14, true, '小明'];
console.log(string[0]);
//JavaScript的对象
var person = {
    name: '小明',
    age: '18',
    city: 'beijing'

};
console.log(person.city);
//JavaScript的全局变量
i = 100;
var a = 'Hello World';
//字符串长度
console.log(a.length);
//获取字符串
console.log(a[0]);
//转换为大写
console.log(a.toUpperCase());

//转换为小写
console.log(a.toLowerCase());
//字符串出现位置
console.log(a.indexOf("W"));
//取字符串
console.log(a.substring(1, 6));
//取数组长度
console.log(string.length);
//修改数组
var age = [1, 2, 3, 4, 5, 6];
age[0] = 100;
console.log(age)
//找数组位置
console.log(age.indexOf(3));

var car = ["Saab", "Volvo", "BMW"];
var person = { firstName: "John", lastName: "Doe" };
console.log(person);
console.log(car);
//JavaScript的函数
function set() {
    document.getElementById("eitor");
}
//一条语句，多个变量
//您可以在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可：

var lastname = "Doe", age = 30, job = "carpenter";
//使用 let 和 const (ES6)
//在 2015 年以前，我们使用 var 关键字来声明 JavaScript 变量。

//在 2015 后的 JavaScript 版本 (ES6) 允许我们使用 const 关键字来定义一个常量，使用 let 关键字定义的限定范围内作用域的变量。
const name = "xaioming";

/**
 * 下面的代码创建名为 cars 的数组：
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
或者 (condensed array):

var cars=new Array("Saab","Volvo","BMW");
或者 (literal array):

实例
var cars=["Saab","Volvo","BMW"];
 * 
 */
/**
 * 
 * JavaScript 对象
对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

var person={firstname:"John", lastname:"Doe", id:5566};
上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。

空格和折行无关紧要。声明可横跨多行：


对象属性有两种寻址方式：

实例
name=person.lastname;
name=person["lastname"];
 */
var person = {
    firstname: "John",
    lastname: "Doe",
    id: 5566,
    //在对象中写一个方法方法名为method
    method: function () {
        //在方法中，this 表示该方法所属的对象。
        return this.firstname
    },
};
console.log(person.firstname)
/**
 * 当您声明新变量时，可以使用关键词 "new" 来声明其类型：
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
 */
//调用这个方法
console.log(person.method())

function methodname(string) {
    return string
}
//方法的表示
/*
面向对象语言中 this 表示当前对象的一个引用。
但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
类似 call() 和 apply() 方法可以将 this 引用到任何对象

*/
var x = this;
//指的是windows对象window 就是该全局对象为 [object Window]:
function get() {
    return this;
    //输出的也是windows对象object Windows
}
/*严格模式下，如果单独使用，this 也是指向全局(Global)对象。

实例
"use strict";
var x = this;
严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。

实例
"use strict";
function myFunction() {
  return this;
}

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素：

实例
<button onclick="this.style.display='none'">
点我后我就消失了
</button>

*/
/*
在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。这两个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。

在下面实例中，当我们使用 person2 作为参数来调用 person1.fullName 方法时, this 将指向 person2, 即便它是 person1 的方法：

实例

*/
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
//call切换this所指的对象person2
person1.fullName.call(person2);


//ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。

//let 声明的变量只在 let 命令所在的代码块内有效。

//const 声明一个只读的常量，一旦声明，常量的值就不能改变。

//在 ES6 之前，JavaScript 只有两种作用域： 全局变量 与 函数内的局部变量。
//全局变量
//在函数外声明的变量作用域是全局的：
var carName = "Volvo";

// 这里可以使用 carName 变量

function myFunction() {
    // 这里也可以使用 carName 变量
}
//在函数内声明的变量作用域是局部的（函数内）：
function myFunction() {
    var carName = "Volvo";
    // 这里可以使用 carName 变量
}

//JavaScript 块级作用域(Block Scope)
//使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到。
/*
{ 
    var x = 2; 
}
*/
// 这里可以使用 x 变量
//在 ES6 之前，是没有块级作用域的概念的。

//ES6 可以使用 let 关键字来实现块级作用域。

//let 声明的变量只在 let 命令所在的代码块 {} 内有效，在 {} 之外不能访问。

{
    let x = 2;
}
// 这里不能使用 x 变量
/*
let 关键字就可以解决这个问题，因为它只在 let 命令所在的代码块 {} 内有效。

实例
var x = 10;
// 这里输出 x 为 10
{
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
使用 var 关键字：

实例
var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 10
使用 let 关键字：

实例
let i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 5

在第一个实例中，使用了 var 关键字，它声明的变量是全局的，包括循环体内与循环体外。
在第二个实例中，使用 let 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。

*/
//const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改：
/*
const定义常量与使用let 定义的变量相似：
二者都是块级作用域
都不能和它所在作用域内的其他变量或函数拥有相同的名称
两者还有以下两点区别：
const声明的常量必须初始化，而let声明的变量不用
const 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改。
const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的。下面的代码并不会报错：
*/
// 创建常量对象
const carone = { type: "Fiat", model: "500", color: "white" };
for (x in carone) {
    txt = txt + carone[x]
    console.log(txt)
}
// 修改属性:
carone.color = "red";

// 添加属性
carone.owner = "Johnson";
// 创建常量数组
const cars = ["Saab", "Volvo", "BMW"];

// 修改元素
cars[0] = "Toyota";

// 添加元素
cars.push("Audi");
/*
但是我们不能对常量数组重新赋值：
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // 错误
*/
/*
JSON 格式在语法上与创建 JavaScript 对象代码是相同的。
由于它们很相似，所以 JavaScript 程序可以很容易的将 JSON 数据转换为 JavaScript 对象
JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。
*/
const array = {
    title: "javascript",
    content: "java教程",
};
console.log(JSON.stringify(array))
//
/*
<a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a>
<br>
...
<br>
<p id="pos">尾部定位点</p>
*/
/*
回调函数
回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。
这段程序中的 setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数，这个函数执行之后会产生一个子线程，子线程会等待 3 秒，然后执行回调函数 "print"，在命令行输出 "RUNOOB!"。
当然，JavaScript 语法十分友好，我们不必单独定义一个函数 print ，我们常常将上面的程序写成：
setTimeout(function () {
    document.getElementById("demo").innerHTML="RUNOOB!";
}, 3000);

*/
function print() {
    console.log("子线程执行")
}
setTimeout(print, 3000);
/*
：既然 setTimeout 会在子线程中等待 3 秒，在 setTimeout 函数执行之后主线程并没有停止，所以：

实例
setTimeout(function () {
    document.getElementById("demo1").innerHTML="RUNOOB-1!";
}, 3000);
document.getElementById("demo2").innerHTML="RUNOOB-2!";
*/
/*
我们使用 class 关键字来创建一个类，类体在一对大括号 {} 中，我们可以在大括号 {} 中定义类成员的位置，如方法或构造函数。
每个类中包含了一个特殊的方法 constructor()，它是类的构造函数，这种方法用于创建和初始化一个由 class 创建的对象。

class ClassName {
  constructor() { ... }
}
定义好类后，我们就可以使用 new 关键字来创建对象：

class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

创建对象时会自动调用构造函数方法 constructor()。

类表达式
类表达式是定义类的另一种方法。类表达式可以命名或不命名。命名类表达式的名称是该类体的局部名称。

实例
// 未命名/匿名类
let Runoob = class {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
// output: "Runoob"
 
// 命名类
let Runoob = class Runoob2 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
// 输出: "Runoob2"
*/
class GetName {
    constructor(name) {
        //类的构造方法

    }
    //类里面写方法
    name(string) {
        return string;
    }
}
let getname = new GetName();
console.log(getname.name("测试"))
/*
super() 方法引用父类的构造方法。
通过在构造方法中调用 super() 方法，我们调用了父类的构造方法，这样就可以访问父类的属性和方法。
继承对于代码可复用性很有用。
*/
class GetAge extends GetName {
    constructor() {
        super(name);
    }
    Age() {

    }
}
let fun = new GetAge();
console.log(fun.name("你好"))
/*
静态方法是使用 static 关键字修饰的方法，又叫类方法，属于类的，但不属于对象，在实例化对象之前可以通过 类名.方法名 调用静态方法。
静态方法不能在对象上调用，只能在类中调用。
如果你想在对象 noob 中使用静态方法，可以作为一个参数传递给它：
*/
class Runoob {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

//let noob = new Runoob("菜鸟教程");
//console.log(noob.hello())
// 以上代码会报错
/*
创建 JavaScript 对象
通过 JavaScript，您能够定义并创建自己的对象。

创建新对象有两种不同的方法：

使用 Object 定义并创建对象的实例。
使用函数来定义对象，然后创建新的对象实例。
使用 Object
在 JavaScript 中，几乎所有的对象都是 Object 类型的实例，它们都会从 Object.prototype 继承属性和方法。

Object 构造函数创建一个对象包装器。

Object 构造函数，会根据给定的参数创建对象，具体有以下情况：

如果给定值是 null 或 undefined，将会创建并返回一个空对象。
如果传进去的是一个基本类型的值，则会构造其包装类型的对象。
如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址。
当以非构造函数形式被调用时，Object 的行为等同于 new Object()。
语法格式：

// 以构造函数形式来调用
new Object([value])
value 可以是任何值。

以下实例使用 Object 生成布尔对象：

// 等价于 o = new Boolean(true);
var o = new Object(true);
*/
var Dog = new Object();
Dog.firstName = "小狗";
Dog.lastName = "李";
Dog.age = "18";
console.log(Dog)
/*
也可以使用对象字面量来创建对象，语法格式如下：

{ name1 : value1, name2 : value2,...nameN : valueN }
其实就是大括号里面创建 name:value 对，然后 name:value 对之间以逗号 , 隔开。

实例
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
*/
/*
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}
在JavaScript中，this通常指向的是我们正在执行的函数本身，或者是指向该函数所属的对象（运行时）
*/
function dog(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.change = change;
    //指向对象的方法change

    function change(firstName) {
        this.eyecolor = firstName;
    }
}
var doing = new dog("小明", "黄", "18");
doing.change("小明");
console.log(doing.eyecolor);

var x;
var txt = "";
const cartwo = { type: "Fiat", model: "500", color: "white" };
for (x in cartwo) {
    txt = txt + cartwo[x]
    console.log(txt)
}
/*
默认情况下，JavaScript 数字为十进制显示。
但是你可以使用 toString() 方法 输出16进制、8进制、2进制。
var myNumber=128;
myNumber.toString(16);   // 返回 80
myNumber.toString(8);    // 返回 200
myNumber.toString(2);    // 返回 10000000
当数字运算结果超过了JavaScript所能表示的数字上限（溢出），结果为一个特殊的无穷大（infinity）值，在JavaScript中以Infinity表示。同样地，当负数的值超过了JavaScript所能表示的负数范围，结果为负无穷大，在JavaScript中以-Infinity表示。无穷大值的行为特性和我们所期望的是一致的：基于它们的加、减、乘和除运算结果还是无穷大（当然还保留它们的正负号）。

实例
myNumber=2;
while (myNumber!=Infinity)
{
    myNumber=myNumber*myNumber; // 重复计算直到 myNumber 等于 Infinity
}
*/
/*
字符串使用 indexOf() 来定位字符串中某一个指定的字符首次出现的位置：

实例
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");

尝试一下 »
如果没找到对应的字符函数返回-1

lastIndexOf() 方法在字符串末尾开始查找字符串出现的位置。

内容匹配
match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符
replace() 方法在字符串中用某些字符替换另一些字符。
字符串使用split()函数转为数组:
txt="a,b,c,d,e"   // String
txt.split(",");   // 使用逗号分隔
txt.split(" ");   // 使用空格分隔
txt.split("|");   // 使用竖线分隔 
\'	单引号
\"	双引号
\\	斜杆
\n	换行
\r	回车
\t	tab
\b	空格
*/
/*
设置日期
通过使用针对日期对象的方法，我们可以很容易地对日期进行操作。

在下面的例子中，我们为日期对象设置了一个特定的日期 (2010 年 1 月 14 日)：

var myDate=new Date();
myDate.setFullYear(2010,0,14);
在下面的例子中，我们将日期对象设置为 5 天后的日期：

var myDate=new Date();
myDate.setDate(myDate.getDate()+5);
*/
//输出日期
var myDate = new Date();
console.log(myDate)
/*
两个日期比较
日期对象也可用于比较两个日期。

下面的代码将当前日期与 2100 年 1 月 14 日做了比较：

var x=new Date();
x.setFullYear(2100,0,14);
var today = new Date();

if (x>today)
{
    alert("今天是2100年1月14日之前");
}
else
{
    alert("今天是2100年1月14日之后");
}
*/
/*
创建数组, 为其赋值：
*/
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
console.log(mycars);
/*
创建一个数组，有三种方法。

下面的代码定义了一个名为 myCars的数组对象：

1: 常规方式:

var myCars=new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";
2: 简洁方式:

var myCars=new Array("Saab","Volvo","BMW");
3: 字面:

var myCars=["Saab","Volvo","BMW"];
*/
/*
访问数组
通过指定数组名以及索引号码，你可以访问某个特定的元素。
以下实例可以访问myCars数组的第一个值：
var name=myCars[0];
以下实例修改了数组 myCars 的第一个元素:
myCars[0]="Opel";
所有的JavaScript变量都是对象。数组元素是对象。函数是对象。
因此，你可以在数组中有不同的变量类型。
你可以在一个数组中包含对象元素、函数、数组：
myArray[0]=Date.now;
myArray[1]=myFunction;
myArray[2]=myCars;
数组方法和属性
使用数组对象预定义属性和方法：
var x=myCars.length             // myCars 中元素的数量
var y=myCars.indexOf("Volvo")   // "Volvo" 值的索引值
合并两个数组 - concat()
合并三个数组 - concat()
用数组的元素组成字符串 - join()
删除数组的最后一个元素 - pop()
数组的末尾添加新的元素 - push()
将一个数组中的元素的顺序反转排序 - reverse()
删除数组的第一个元素 - shift()
从一个数组中选择元素 - slice()
数组排序（按字母顺序升序）- sort()
数字排序（按数字顺序升序）- sort()
数字排序（按数字顺序降序）- sort()
在数组的第2位置添加一个元素 - splice()
转换数组到字符串 -toString()
在数组的开头添加新元素 - unshift()
*/
/*
Boolean 对象代表两个值:"true" 或者 "false"
下面的代码定义了一个名为 myBoolean 的布尔对象：
var myBoolean=new Boolean();
如果布尔对象无初始值或者其值为:
0
-0
null
""
false
undefined
NaN
那么对象的值为 false。否则，其值为 true（即使当变量值为字符串 "false" 时）！
*/
/*
round()
如何使用 round()。

random()
如何使用 random() 来返回 0 到 1 之间的随机数。

max()
如何使用 max() 来返回两个给定的数中的较大的数。（在 ECMASCript v3 之前，该方法只有两个参数。）

min()
如何使用 min() 来返回两个给定的数中的较小的数。（在 ECMASCript v3 之前，该方法只有两个参数。）
除了可被 Math 对象访问的算数值以外，还有几个函数（方法）可以使用。

下面的例子使用了 Math 对象的 round 方法对一个数进行四舍五入。
下面的例子使用了 Math 对象的 random() 方法来返回一个介于 0 和 1 之间的随机数
下面的例子使用了 Math 对象的 floor() 方法和 random() 来返回一个介于 0 和 11 之间的随机数
*/
/*
exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
下面的示例是从字符串中搜索字符 "e" ：
var patt1=new RegExp("e");
document.write(patt1.exec("The best things in life are free"));
*/