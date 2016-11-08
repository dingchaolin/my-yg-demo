var xmlBuilder = require( 'xmlbuilder' );

var xml = xmlBuilder.create( 'root',{
    version: '1.0',
    encoding: "GB2312"
}).ele( 'xmlbuilder').ele('repo',{
        type:'git',name:'dcl'},
        'https://github.com/dingchaolin/yuguo-demo.git').ele(
    {resultInfo: {
    'return': 'success'
        }
    }).end({
    pretty :'true'});

console.log(  xml );


