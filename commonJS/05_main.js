//const modA = require('./05_modA');
// const mod8 = require( './08_exports' );
// console.log( mod8.test );
//wonderful vscode
const mod9 = require( './09_global' );
console.log( mod9.test );
console.log( global.test );//用global访问全局变量
console.log( test );//用变量名访问全局变量