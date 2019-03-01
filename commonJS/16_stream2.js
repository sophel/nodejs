//stream:1.有方向，2.数据
const fs = require('fs');
const ws = fs.createWriteStream('./16_test1.txt');
// ws.write( '5' );
const timer = setInterval(() => {
  const num = parseInt(Math.random()*10);
  if( num<7 ){
    ws.write( num.toString() );//必须转化成字符换或buffer
  }else{
    ws.end();
    clearInterval( timer );
  }
}, 200);
//事件监听
ws.on( 'finish',()=>{//监听end
  console.log( 'done!' );
} );