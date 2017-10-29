var express = require('express');
let question = require('../models/question');
let usersInfor = require('../models/userInfor');
var router = express.Router();


/* GET home page. */

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
    res.render('index', {
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

router.post('/up/:questionId',(req,res) => {
  let questionId = req.params['questionId'];
  let userid = req.session.userId;
  console.log(userid);
  let { count } = req.body;
  console.log(count);
  question.findByIdAndUpdateMet("questions", {'_id':questionId},{'up': parseInt(count)},function(err,result){
      if(err){
        res.send({
          status : -1,
          msg :'点赞失败'
        });
      }else{
        console.log(result);
        res.send(
          {
            status : 1,
            msg :'点赞成功'
          } 
        );
      }
  })
})



module.exports = router;