let express = require('express');
let question = require('../models/question');
let userInfor = require('../models/userInfor');
let router = express.Router();

router.get('/', (req,res) => {
    res.render('sendQuestion',{});
});


let myquestion = [];
router.post("/subProblem",(req,res) => {
  let {username,title,content,time} = req.body;
  let tag = req.body['tag[]'];
  question.insertData('questions',{username,title,tag,content,time},function (err,result) {
    console.log(result);
    if(err){
      res.send("问题未能成功发布");
      return;
    }else if(title == ''||tag == ''|| content == ''){
      res.send("您有未填写项目，发布失败");
      return;
    }else {
      var userId =  req.session.userId;
      var questionId = result._id;
      userInfor.updateData('userInfor',{userId},{$push : {'myquestion' : questionId}},null,function (err,result) {
        if(err){
          res.send("插入数据失败");
          return;
        }
        console.log(result);
        res.send("问题发布成功");
      });
      }
  });
});

router.post("/subId",(req,res) =>{
  let {myquestion} = req.body;
  myQuestion.insertData('userInfor',{myquestion},function (err,result){
    console.log(result);
    if(err){
      res.send("ID添加失败");
    }else{
      res.send("ID添加成功");
    }
  });
});
module.exports = router;