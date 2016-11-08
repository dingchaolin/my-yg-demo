var bcryptjs = require('bcryptjs');//加密
bcryptjs.hash('yuguo2016', 10, function (err, hash) {
    console.log( hash.length,hash );//长度60  每次产生的结果都不一样
    //$2a$10$j097grlx9zz731ybEGbKU.vbgku.nwBMlOI8vCqpfCtcaStr1uogK
});