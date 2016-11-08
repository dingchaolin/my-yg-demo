var spawn  = require( 'child_process' ).spawn;//创建一个子进程
var free = spawn('ls',['-al']);
//获取标准输出并答应到控制台
free.stdout.on( 'data', function( data){
    console.log( `stdout = ${data}` );
});
// //获取标准输入并打印到控制台
 free.stdin.on( 'data', function( data ){
     console.log( `stdin = ${data}` );
 });
// //获取标准输入并打印到控制台
// free.stderr.on( 'data', function( data){
//     console.log( `stderr = ${data}` );
// });

free.on( 'exit', function(code, signal) {
    console.log( `子进程退出码＝${code}`);
})
