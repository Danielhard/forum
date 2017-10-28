let mongoose = require('mongoose');
let db = require('./connectDB');
let operationDBUsers = require('./operationDB');
let userSchema ;

// console.log(userSchema);

// 创建用户的Schema
userSchema = new mongoose.Schema({
    username : {type : String},
    password : {type : String},
    infor    : {type : Array}
});

userSchema.statics.insertData = operationDBUsers.insertData;
userSchema.statics.findUser = operationDBUsers.find;
userSchema.statics.updateData = operationDBUsers.update;
userSchema.statics.deleted = operationDBUsers.deleted;
userSchema.statics.findByIdAndUpdateMet = operationDBUsers.findByIdAndUpdateMet;

let users = db.model('users',userSchema);
module.exports = users;