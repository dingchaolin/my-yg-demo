var ThenJS = require( 'thenjs' );
var count = 0;
ThenJS( function( defer ){
  count++;
  var task1 = ( arg, cb )=>{
      var err = false;
      var data = arg;
      console.log( 'data='+data );
      cb( err, data );//这个回调函数是不行的
  }
  task1( count, defer );
}).then( function( defer, value ){
   count = ++value;
   console.log( "count2 = " + count );
   defer( null, count );
}).fail( function( defer, err ){
  if( err ){
    console.log( err );
  }
});