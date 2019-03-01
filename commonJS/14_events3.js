//只触发一次的事件
const EventEmitter = require('events');
class CustomEvent extends EventEmitter{}
const ce = new CustomEvent();
ce.once( 'ticker',()=>{ console.log('ticker!') });
ce.emit( 'ticker' );
ce.emit( 'ticker' );
ce.emit( 'ticker' );