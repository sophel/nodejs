//多次exports同名接口，后面的覆盖前面的，只输出一个
module.exports.foo = '1';
module.exports.foo = '2';
module.exports.foo = '3';