//const path = require('path');
//path.basename取得的是最后的文件名
//console.log( path.basename('d:\\xampp\\htdocs\\nodejs\\commonJS\\01_common.js') );
//console.log( path.win32.basename( 'd:\\xampp\\htdocs\\nodejs\\commonJS\\01_common.js' ) );

//
const{ normalize,join,resolve } = require( 'path' );
//console.log( normalize('/test/aa/../bb') );  
//console.log( normalize('/test////aa/../bb') );  
//console.log( normalize('d:\\xampp\\htdocs\\nodejs\\commonJS\\01_common.js') );  
//console.log( join('/foo', 'bar', 'baz/asdf', 'quux', '..') );
console.log( '当前项目目录',resolve('./') );//当前项目目录
console.log( '上一级目录',resolve('../') );//上一级目录
console.log( '根目录',resolve('/') );//根目录

const{ basename,dirname,extname,parse,format } = require( 'path' );
let path = 'd:\\xampp\\htdocs\\nodejs\\commonJS\\01_common.js';
//console.log( basename( path ) );//文件名
//console.log( dirname( path ) );//所在目录名
//console.log( extname( path ) );//文件扩展名

//parse
let rst = parse( path );
//{ root: 'd:\\',
//dir: 'd:\\xampp\\htdocs\\nodejs\\commonJS',
//base: '01_common.js',
//ext: '.js',
//name: '01_common' }

//console.log( rst );
//format
let org = format( { root: 'd:\\',
dir: 'd:\\xampp\\htdocs\\nodejs\\commonJS',
base: '01_common.js',
ext: '.js',
name: '01_common' }
);
//console.log( org );

//sep,
const{ sep,//分隔符
  win32,
  delimiter
 } = require( 'path' );
// console.log( process.env.PATH );
// console.log( process.env.PATH.split(delimiter)[0].split( sep ) );
// console.log( sep );//路径标识符
// console.log( win32.sep );
// console.log( delimiter );//PATH内的路径分隔符
// console.log( win32.delimiter );

//3种路径不一样的地方
let myPath = require( 'path' );
console.log( '__dirname',__dirname );//总是返回绝对路径（目录）
console.log( '__filename',__filename );//总是返回绝对路径（目录 +文件）
console.log( 'process',process.cwd() );//返回node的当前工作目录-- current-working-directory
console.log( './',myPath.resolve('./') );
//相对路径
//1.在require中总是相对于当前文件所在文件夹
//2.在其他地方与process.cwd()是一致的


