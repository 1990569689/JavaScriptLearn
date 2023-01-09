/*
如果我们使用 PHP 来编写后端的代码时，需要 Apache 或者 Nginx 的 HTTP 服务器，并配上 mod_php5 模块和 php-cgi。

从这个角度看，整个"接收 HTTP 请求并提供 Web 页面"的需求就不需要 PHP 来处理。

不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。事实上，我们的 Web 应用以及对应的 Web 服务器基本上是一样的。

在我们创建 Node.js 第一个 "Hello, World!" 应用前，让我们先了解下 Node.js 应用是由哪几部分组成的：

引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。

创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。

接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
*/

var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/" + "index.html");
})
app.get('/person', function (request, response) {
    response.send("hi");
})
var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://127.0.0.1:8888/');

})


