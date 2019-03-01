const fs = require('fs');
fs.writeFile( __dirname+'/15_fs5.js',Buffer.from('hello world123!'),(err)=>{
  if( err )
    console.log( err );
  console.log( '保存成功！' );  
} );
