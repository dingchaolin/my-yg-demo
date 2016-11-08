var crypto = require('crypto');
var hashObj = crypto.createHash('md5');
var hashUpdate = hashObj.update( "yuguoTech" );//update中传递的参数就是要加密的数据
var hashDigest = hashUpdate.digest('hex');
console.log( hashDigest );//1dadc22fa0363b64b76201c3b03fe67c