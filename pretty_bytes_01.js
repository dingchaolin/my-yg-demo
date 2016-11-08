var pretty_bytes = require( 'pretty-bytes' );
//将位以更加友好的方式展示
console.log( pretty_bytes(1337) );//1.34kB
console.log( pretty_bytes( 1024000 ) );//1.02M


