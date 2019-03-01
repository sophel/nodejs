//require 指令来载入 http 模块
var http = require('http');
//1.创建一个服务并绑定在8888端口
//2.当用户请求该端口，此服务接收参数并返回响应
http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');