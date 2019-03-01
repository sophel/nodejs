//module里的变量是有自身的作用域的，不会暴露在全局中
global.test = 200;
exports.test = 100;
module.exports.name = 'msl';
