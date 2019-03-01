//解决回调地狱问题
//用es6的promise来实现
// let promise1 = new Promise((resolve,reject)=>{
//   fs.readFile(__dirname+'/15_fs5.js','utf8',(err,data)=>{
//     if(err) reject(err);
//     resolve(data);
//   });
// }).then((data)=>{
//   console.log( data );
// },(err)=>{
//   console.log( err );
// });
const fs = require('fs');
const promisify = require('util').promisify;
const read = promisify( fs.readFile );//一个异步操作
read(__dirname+'/15_fs3.js').then(data=>{
  console.log( data.toString() );
}).catch(ex=>{//catch的是resolve里面的异常，如果ok则不执行catch里的语句
  console.log( ex );
})

