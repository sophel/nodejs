//nodejs的事件大多是自己写程序去“手动”触发的
const EventEmitter = require('events');
class CustomEvent extends EventEmitter{

}
const ce = new CustomEvent();
ce.on( 'test',()=>{
  console.log( 'this is a test' );
} );
setInterval(() => {
  ce.emit( 'test' );
}, 1000);