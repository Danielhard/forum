let express = require('express');
let question = require('../models/question');
let userInfor = require('../models/userInfor');
let commonJs = require('../models/commonJS');
let router = express.Router();

router.get('/', function (req, res, next) {
  let headpic = '';
  if (req.session.userId) {
    //获得登录人id
    var userid = req.session.userId;
    var login = true;


  } else {
    var userid = '';
    var login = false;

  }

  //从数据库查找
  userInfor.findUser('userInfor', {
    userid
  }, function (err, result) {
    // console.log(result);
    if (result.length == 0) {
      headpic = "";
      return;
    } else {
      headpic = commonJs.Trim(result[0].headPic , 'g');
    }
  });

  question.findUser("questions", {}, function (err, result) {
    if (err) {
      return;
    } else {}
    res.render('sendQuestion', {
      title: "666",
      result,
      username: req.session.username,
      login,
      headpic
    });
    return;
  });

});
router.get('/logout', function (req, res, next) {
  req.session.userId = '';
  console.log(req.session.userId);
  res.redirect('/');

});


let myquestion = [];
router.post("/subProblem",(req,res) => {
  let {title,content,time} = req.body;
  let tag = req.body['tag[]'];
  let usernme = req.session.username;
  let data = {
    userId: req.session.userId,
    username,
    content,
    title,
    tag,      
    time,
    lookTimes: 0,
    isSolved: 'false',
    up:0,
    down:0,
    collect:0,
    Reply: []  
  }
  question.insertData('questions',data,function (err,result) {
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
      
      console.log(userId);
      userInfor.updateData('userInfor',{userid : userId},{$push : {'myquestion' : questionId}},null,function (err,result) {
        if(err){
          res.send("插入数据失败");
          return;
        }
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