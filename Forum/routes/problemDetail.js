let express = require('express');
let question = require('../models/question');
let router = express.Router();

router.get('/:questionId', (req,res) => {
    res.render('problemDetail',{ id:req.params.questionId });
});

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
    usersInfor.findUser('userInfor', {
      userid
    }, function (err, result) {
      // console.log(result);
      if (result.length == 0) {
        headpic = "";
        return;
      } else {
        headpic = result[0].headPic;
      }
    });
  
    question.findUser("questions", {}, function (err, result) {
      if (err) {
        return;
      } else {}
      res.render('problemDetail', {
        title: "666",
        result,
        username: req.session.username,
        login,
        headpic
      });
      return;
    });
  
  });

module.exports = router;