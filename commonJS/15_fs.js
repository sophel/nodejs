const fs = require('fs');
//异步读文件
fs.readFile( __dirname+'/15_fs.js','utf8',(err,data) =>{
  if( err ){
    console.log( 'whoops!' );
    throw err;
  }else{
    console.log( 'success!' );
  }
} );
//异步执行setTimeout
setTimeout(() => {
  console.log( 'settimeout！' );
}, 1000);
console.log( 'time1:'+new Date().getTime() );
//主程序sleep休眠
function sleep(numbermsec){
  let now = new Date().getTime();
  let desc = now+numbermsec;
  while( now<desc ){
    now = new Date().getTime();
  }
}
sleep(3000);
//主程序执行同步读文件操作
let buf = fs.readFileSync(__dirname+'/15_fs.js','utf8');
console.log( buf );
console.log( 'time2:'+new Date().getTime() );