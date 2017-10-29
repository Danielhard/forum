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

/**
 * 
 * @param {* 字符串} str 
 * @param {* 是否去除中间空格，g表示去除} is_global 
 */
function Trim(str,is_global)
{
 var result;
 result = str.replace(/(^\s+)|(\s+$)/g,"");
 if(is_global.toLowerCase()=="g")
 {
  result = result.replace(/\s/g,"");
  }
 return result;
}

module.exports = { encryption, Trim };
