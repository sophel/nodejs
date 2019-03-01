const fs = require('fs');
//监视文件、目录的变化
fs.watch(__dirname,{
  recursive:true},( eventType,fileName )=>{
    //增加、删除文件文件均是rename
    console.log(eventType);
    console.log(fileName);
  });