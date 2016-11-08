var marked = require('marked');
var fs = require('fs');
var http = require('http');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm:true,
    tables:true,
    breaks:true,
    pedantic:true,
    sanitize:true,
    smartLists:true,
    smartypants:true
});

var server = function( html ){
    http.createServer( function( req, res){
        res.writeHead( 200, {'Content-Type':'text/html;charset=utf8'} );
        res.end( html );
    }).listen( 8080 );
};

fs.readFile('mark1.md','utf-8',function(err, data) {
    if( err ) throw err;
    server( marked(data) );
});

console.log('server running at localhost:8080/');