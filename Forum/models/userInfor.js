let mongoose = require('mongoose');
let db = require('./connectDB.js');
let operationDbUserInfor = require('./operationDB.js');
let userInforSchema = new mongoose.Schema({
    userid      : {type : String},
    username    : {type : String},
    headPic     : {type : String},
    age         : {type : Number},
    sex         : {type : String},
    birthday    : {type : Date},
    myquestion  : {type : Array},
    bestLike    : {type : Array}
});

userInforSchema.statics.insertData = operationDbUserInfor.insertData;
userInforSchema.statics.findUser = operationDbUserInfor.find;
userInforSchema.statics.updateData = operationDbUserInfor.update;
userInforSchema.statics.deleted = operationDbUserInfor.deleted;

let userInfor = db.model('userInfor',userInforSchema);
module.exports = userInfor;