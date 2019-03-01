function test1(){
  const a = parseInt( 10*Math.random() );
  const b = parseInt( 10*Math.random() );
  const c = test2( a, b );
  console.log( c );
}
function test2( a,b ){
  if( a > b ){
    a += a*2;
  }else{
    b -= a;
  }
  return a + b;
}
test1();