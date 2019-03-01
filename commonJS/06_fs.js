//引用系统内置模块
const fs = require( 'fs' );//filesystem
const rst = fs.readFile('./06_fs.js', (error,data) => {
	if( error ){
		console.log( error );
		return;
	}
	console.log( data.toString() );
});//异步回调不被等待
console.log( rst );//先执行该出