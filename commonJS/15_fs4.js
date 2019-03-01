const fs = require('fs');
// fs.readdir( './',(err,folderlist)=>{//文件和文件夹名
//   console.log(folderlist);
// } );
// //创建文件夹
// fs.mkdir( 'test',(err)=>{
//   if( err )throw err;
//   console.log('done!');
// } );
//删除文件夹
fs.rmdir( 'test', (err)=>{
  if( err )throw err;
  console.log('done!');
} );