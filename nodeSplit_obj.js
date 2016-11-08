var split = require( 'split' );
var fs = require( 'fs' );
var file = './nodeSplit_obj.json';
var counter = 0;
fs.createReadStream( file )
    .pipe( split( JSON.parse ))
    .on( 'data', function( line ){
        counter++;
        console.log( `counter = ${counter}, line = ${JSON.stringify(line)}` );
    }).on('error', function( err ){
        console.log( `error = ${err}` );
    });

