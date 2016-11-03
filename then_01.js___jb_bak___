var ThenJS = require( 'thenjs' );
var count = 0;
ThenJS( function( defer ){
  count++;
  //defer( null, count );
  defer( "error message!" );
}).then( function( defer, value ){
   count = ++value;
   console.log( count );
   defer( null, count );
}).fail( function( defer, err ){
  if( err ){
    console.log( err );
  }
})