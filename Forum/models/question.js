let mongoose = require('mongoose');
let db = require('./connectDB');
let operationDB = require('./operationDB');

// 创建问题的Schema
let questionSchema = new mongoose.Schema({
    userId        : {type : String},
    username      : {type : String},
    content       : {type : String},
    title         : {type : String},
    tag           : {type : Array},
    time          : {type : String},
    lookTimes     : {type : Number},
    isSolved      : {type : Boolean},
    up            : {type : Number},
    down          : {type : Number},
    collect       : {type : Number},
    Reply         : {type : Array}
});

// 静态方法
questionSchema.statics.insertData = operationDB.insertData;
questionSchema.statics.findUser = operationDB.find;
questionSchema.statics.upadteData = operationDB.update;
questionSchema.statics.deleted = operationDB.deleted;
questionSchema.statics.findByIdAndUpdateMet = operationDB.findByIdAndUpdateMet;
questionSchema.statics.findById = operationDB.findById;


let question = db.model('questions',questionSchema);
module.exports = question;
