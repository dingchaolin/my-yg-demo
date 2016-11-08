var exec = require('child_process').exec;
var std = exec( 'ls', function(){
    console.log('#######################');
    console.log( arguments );
    console.log('#######################');
});
std.stdout.on( 'data', function( data ){
    console.log('＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊');
    console.log( `stdout = ${data}` );
    console.log('＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊');
})