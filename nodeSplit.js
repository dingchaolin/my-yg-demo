var split = require( 'split' );
var fs = require( 'fs' );
var file = './randomstring.js';
var counter = 0;
fs.createReadStream( file )
    .pipe( split() )
    .on( 'data', function( line ){
        counter++;
        console.log( `counter = ${counter}, line = ${line}` );
    }).on('error', function( err ){
        console.log( `error = ${err}` );
    });

