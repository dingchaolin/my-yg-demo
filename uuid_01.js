/**
 * Created by dingchaolin on 16/11/7.
 */

var node_uuid = require('node-uuid');
//基于时间戳生成uuid
var uuid_timebase = node_uuid.v1();
//基于随机数生成uuid
var uuid_random = node_uuid.v4();

console.log( `uuid_timebase = ${uuid_timebase}` );//uuid_timebase = 0e3c8c60-a4af-11e6-850b-35be9b2bed8e
console.log( `uuid_random = ${uuid_random}` );//uuid_random = 2c851965-3cf8-42fa-9c50-f2969034563c
