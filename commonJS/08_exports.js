//exports永远指向module.exports，是一个const常量引用
//不应该改变exports对象的引用，否则拿不到接口数据
//exports.test = 100;
//等同于
//module.exports.test = 100;
//如果改变exports的引用指向，将拿不到值
// exports = {
//   a:1,
//   b:2,
//   test:100
// };
module.exports = {
  a:1,
  b:2,
  test:100
};