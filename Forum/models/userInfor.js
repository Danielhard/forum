let mongoose = require('mongoose');
let db = require('./connectDB.js');
let operationDbUserInfor = require('./operationDB.js');
let userInforSchema = new mongoose.Schema({
    userid           : {type : String},
    username         : {type : String},
    headPic          : {type : String},
    age              : {type : Number},
    sex              : {type : String},
    birthday         : {type : Date},
    nickname         : {type : String},             // 昵称
    job              : {type : String},
    company          : {type : String},
    selfIntroduction : {type : String},             // 自我介绍
    personalWebsite  : {type : String},             // 个人网站
    myquestion       : {type : Array},
    bestLike         : {type : Array}
});

userInforSchema.statics.insertData = operationDbUserInfor.insertData;
userInforSchema.statics.findUser = operationDbUserInfor.find;
userInforSchema.statics.updateData = operationDbUserInfor.update;
userInforSchema.statics.deleted = operationDbUserInfor.deleted;
userInforSchema.statics.findByIdAndUpdateMet = operationDbUserInfor.findByIdAndUpdateMet;
userInforSchema.statics.findById = operationDbUserInfor.findById;

let userInfor = db.model('userInfor',userInforSchema);
module.exports = userInfor;