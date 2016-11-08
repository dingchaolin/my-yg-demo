var cron = require('cron').CronJob;//定时任务相关
/*
@param
执行时刻
执行方法
完成时回调
是否立即开始  如果为false（默认false） 需要手动调用start方法
 */
var cron_1 = new cron( '*/3 * * * * *', function(){
    console.log( "1 -- " + new Date().toLocaleString() );
}, null, true );


var cron_2 = new cron( '*/5 * * * * *', function(){
    console.log( "2 == " + new Date().toLocaleString() );
});
cron_2.start();
