var jsSHA = require('jssha');
//这种写法版本不能太高 1.5.0 可以 否则会报错： Chosen SHA variant is not supported
var shaObj = new jsSHA("yuguo","TEXT");
var signText = shaObj.getHash('SHA-1','HEX');
console.log( signText );//d83dd4bc38ea447dbbdb9f873894db6aab50f2bb

