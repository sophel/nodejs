//加载一个模块的时候，它的所有语句都会被执行
//加载模块会缓存
const mod = require('./01_common.js');
console.log( mod.testVar );
mod.fn();