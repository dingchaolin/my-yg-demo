var shortid  = require('shortid');
//生成一个9位的字符串 a-z  A-Z  0-9  -_
shortid.seed(1);
console.log( shortid.generate() );//ByXdZa0lx