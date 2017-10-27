var express = require('express');
let question = require('../models/question');
let usersInfor = require('../models/userInfor');
var router = express.Router();


/* GET home page. */

router.get('/', function (req, res, next) {
  let headpic = '';
  // console.log(req.session.userId);
  if (req.session.userId) {
    //获得登录人id
    var userid = req.session.userId;
    var login = true;
   

  } else {
    var userid = '';
    var login = false;
  
  }

  //从数据库查找
  usersInfor.findUser('userInfor', {
    userid
  }, function (err,result) {
    // console.log(result);
    if (result.length == 0) {
      headpic = "";
      return ;
    } else {
      headpic = result[0].headPic;
    }
  });

  question.findUser("questions", {}, function (err, result) {
    if (err) {
      return;
    } else {
      // req.session.questionid = result[0]._id;
      // console.log(result);
      // console.log(result[0]);
      // res.render("index", {
      //   title: "express",
      //   result
      // });
    }


    res.render('index', {title : "666", result,username:req.session.username, login, headpic});
    return;
  });

}); 
router.get('/logout',function(req,res,next){
    req.session.userId='';
    console.log(req.session.userId) ;
    res.redirect('/');

})

module.exports = router;