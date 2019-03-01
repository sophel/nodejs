// (()=>{
//   nonExistentFunction();
//   console.log( 'local block end' );
// })();

// (() => {
//   try{
//     (()=>{
//       nonExistentFunction();
//       console.log('c');
//     })();
//     console.log( 'b' );
//   }catch(e){
//     console.log( e );
//   }
// })();
// console.log( 'a' );
const fs = require('fs');
try{
  fs.readFile( __dirname+'/15_fs1.js',(err,data) =>{
      if( err ){
        throw err;
      }else{
        console.log( data );
      }
  } );
}catch(err){
  console.log( 'an error occured!',err );
}

console.log( 'hhh' );