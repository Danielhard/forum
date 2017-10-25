// 公共方法模块：包含一些公共的方法
let crypto = require('crypto');

/**
 * 
 * @param {* 要加密的数据} str 
 */
function encryption(str){
    let md5 = crypto.createHash('md5');
    let newStr = md5.update(str).digest('base64');
    return newStr;
}

module.exports = { encryption };
