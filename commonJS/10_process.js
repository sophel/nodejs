const{ argv,argv0,execArgv,execPath } = process;
// console.log( argv );//server,dir-path
// console.log( argv0 );
// console.log( execArgv );
// console.log( execPath );//server and executor
const{env} = process;
console.log( env.SHELL );