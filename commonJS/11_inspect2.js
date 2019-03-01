function test( n ){
  console.log( n );
}
//条件断点是，只有满足了某个条件，才会在断点处停留
for( let i=0;i<100;i++ ){
  test( i );
}