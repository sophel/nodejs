//带参数的事件处理程序的调用
const EventEmitter = require('events');
class CustomEvent extends EventEmitter{}
const ce = new CustomEvent();
ce.on( 'error',(...errs)=>{//监听error事件
  //console.log( err );
  for( item of errs ){
    console.log( item );
  }
} );
//ce.emit( 'error', new Error('oops!') );
ce.emit( 'error', 'opps!','I hurt my finger!' );