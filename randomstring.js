var randomstring = require('randomstring');
var randomstr = randomstring.generate();//默认长度32位
console.log( `randomstr = ${randomstr}, length = ${randomstr.length}`);

var randomSet = randomstring.generate( {length:10,charset:"abc"});//custom
console.log( randomSet );//cccabbbbab

/*
charset:
alphanumeric - [0-9 a-z A-Z]
alphabetic - [a-z A-Z]
numeric - [0-9]
hex - [0-9 a-f]
custom - any given characters
*/

var randomAlp = randomstring.generate( {length:5, charset:'alphabetic'});
console.log( randomAlp );

