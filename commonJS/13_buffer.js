//buffer挂在在global上，无需引用
//buffer大小固定
//console.log( Buffer === global.Buffer );
let bf = Buffer.alloc(5,'a');
//console.log( bf );
let bf2 = Buffer.from([1,2,3]);//from array
//console.log( bf2 );
let bf3 = Buffer.from( 'string' );//一个字母占一个字节
let bf4 = Buffer.from( '你好' );//普通汉字占3个字节
let totalLen = bf.length+bf2.length+bf3.length+bf4.length;
// console.log( bf3.byteLength );
// console.log( bf4.byteLength );
// console.log( bf2.byteLength );//数字占1个字节
// console.log( Buffer.isBuffer({}) );
// console.log( Buffer.isBuffer( bf3 ) );
// let t1 = new Date().getTime();
// console.log( t1 );
// //指定长度的话，分配空间速度会有所提升
// let buf = Buffer.concat([bf,bf2,bf3,bf4],totalLen);
// let t2 = new Date().getTime();
// console.log( t2 );
// console.log( t2-t1 );

// let buffer1 = Buffer.allocUnsafe( 10 );
// console.log( buffer1 );
// console.log( buffer1.toString() );
// console.log( buffer1.length );

// buffer1.fill( 'a',2,4 );
// console.log( buffer1 );
// const buf = Buffer.from('this is a buffer');
// console.log( buf.indexOf('buffer') );//所在的字节下标，buffer是一种类数组的对象
//汉字buffer处理
// const buf1 = Buffer.from( 'this is a buffer!' );
// const buf2 = Buffer.alloc( 5 );
// buf1.copy( buf2,0,1 );//不指定结尾则填充满
// console.log( buf2 );
const buf = Buffer.from( '汉字字符串！' );
for( let i=0;i<buf.length; i += 5 ){
  const b = Buffer.allocUnsafe( 5 );
  buf.copy( b,0,i );
  console.log( b.toString() );
}
//const stringDecoder = require('string_decoder');

