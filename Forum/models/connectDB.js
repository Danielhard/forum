// 连接数据库
let settings = require('../config/settings');
let mongoose = require('mongoose');
let db;

function connectDB() {
    db = mongoose.createConnection(settings.config.url);
    // 连接数据库字执行一次,所以使用once方法
    db.once('open', (callback) => {
        console.log('数据库连接成功');
    })
}

connectDB();

module.exports = db;