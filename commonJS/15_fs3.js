const fs = require('fs');
fs.stat( __dirname+'/15_fs2.js',(err,stat)=>{
  if(err) throw err;
  console.log( stat.isDirectory() );
  console.log( stat.isFile() );
  
} );
//重命名，第二个参数依然为path,而非文件名
// fs.rename(__dirname+'/15_try1.js',__dirname+'/15_try11.js',(err)=>{
//   if(err) throw err;
//   console.log( 'success!' );
// });
//删除
// fs.unlink(__dirname+'/test5',(err)=>{
//   if(err) throw err;
//   console.log( 'done!' );
// });
