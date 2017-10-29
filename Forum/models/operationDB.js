// 这个模块中存放了对数据库的操作

/**
 * 
 * @param {* 插入的集合的名称} collectionName 
 * @param {* 插入的数据} data 
 * @param {* 回调函数} callback 
 */
function insertData(collectionName,data,callback) {
    this.model(collectionName).create(data,callback);
}

/**
 * 
 * @param {* 从哪个集合当中查找} collectionName 
 * @param {* 查找的条件是什么} data     例如：传入{id：userId}}根据用户id查找
 * @param {*} callback 
 */
function find(collectionName,data,callback) {
    this.model(collectionName).find(data,callback);
  }

  
/**
 * 
 * @param {* 集合名} collectionName 
 * @param {* 查询条件} condition 
 * @param {* 你要修改的数据} data 
 * @param {* 可选项(这个有很多,自己百度查找一下，也可以填null)} option 
 * @param {* 回调函数} callback 
 */
function update(collectionName,condition,data,option,callback) {
    option = option || {multi: true};                     // 默认允许更新多个
    this.model(collectionName).update(condition,data,option,callback);
}

/**
 * 
 * @param {* 集合名} collectionName 
 * @param {* 查找条件} condition 
 * @param {* 回调函数} callback 
 */
function deleted(collectionName,data,callback) {
    this.model(collectionName).remove(data,callback);
}

/**
 * 
 * @param {* 集合名} collectionName 
 * @param {* mongodb中自动生成的_id} id 
 * @param {* 要修改的数据} updateData
 * @param {* 回调函数} callback 
 */
function findByIdAndUpdateMet(collectionName,id,updateData,callback){
    this.model(collectionName).findByIdAndUpdate(id,updateData,callback);
}

/**
 * 
 * @param {* 集合名} collection 
 * @param {* mongodb中自动生成的_id} id 
 * @param {* 回调函数} callback 
 */
function findById(collection,id,callback){
    this.model(collectionName).findById(id,callback);
}

// 这里写了四个基本的方法,并没有一一测试过,如果有错及时和我说,要是要添加其他方法,也可以和我说


/**
 * 向外部暴露方法
 */
module.exports = { insertData, find, update, deleted, findByIdAndUpdateMet,findById};
