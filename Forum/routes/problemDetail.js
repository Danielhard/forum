let express = require('express');
let question = require('../models/question');
let userInfor = require('../models/userInfor');
let commonJs = require('../models/commonJS');
let moment = require('moment');
let router = express.Router();

router.get('/:questionId', (req, res) => {
  // res.render('problemDetail',{ id:req.params.questionId });
  let questionId = req.params.questionId;
  let username = req.session.username;
  var login = req.session.login;
  // 根据问题id查找这个问题
  question.findUser('questions', {
    '_id': questionId
  }, (err, result) => {
    let returnData = {};
    returnData.username = result[0].username;
    returnData.content = result[0].content;
    returnData.title = result[0].title;
    // returnData.time = moment(new Date(parseInt(result[0].time))).format("LLL");
    returnData.reply = result[0].Reply;
    let nowDate = new Date().getTime();
    for (var i = 0; i < result[0].Reply.length; i++) {
      var dTime = (parseInt(nowDate) -  parseInt(result[0].Reply[i]['replyTime']))/1000;
      if(dTime / 60 < 60) {
        result[0].Reply[i]['replyTime'] = (dTime / 60).toFixed(0) + '分钟前';
      } else if(dTime / 3600 < 24) {
        result[0].Reply[i]['replyTime'] = (dTime / 3600).toFixed(0) + '小时前';
      } else if(dTime / 86400 < 365) {
        result[0].Reply[i]['replyTime'] = (dTime / 86400).toFixed(0) + '天前';
      } else if(dTime / 31536000 > 1) {
        result[0].Reply[i]['replyTime'] = (dTime / 86400).toFixed(0) + '年前';
      }
      result[0].Reply[i]['headpic'] = '../' + commonJs.Trim(result[0].Reply[i]['headpic'],'g');
    }


   // 这个查询主要是控制头部信息的
    userInfor.findUser('userInfor', {
      username
    }, (err, resultInfor) => {
      let headpic = resultInfor[0]['headPic'];
      returnData.id=req.params.questionId;
      returnData.login= login;
      // returnData.headpic= commonJs.Trim(headpic,'g');
      returnData.headpic= '../' + commonJs.Trim(headpic,'g');
      res.render('problemDetail', returnData);
    })
  });
});


router.post('/reply',(req,res) => {

  let username = req.session.username;
  let userid = req.session.userId;
  let ReplyContent = req.body['replyContent'];
  let replyTime = req.body['time'];
  let questionId = req.body['questionId'];


  userInfor.findUser('userInfor',{ userid }, (err,result) => {
    if(err) {
      res.send({
        status : 0,
        msg : '无法提交该评论'
      });
      return;
    }
    // let headpic = commonJs.Trim(result[0]['headPic'],'g');
    let headpic = '../' + commonJs.Trim(result[0]['headPic'],'g');
    let sendData = {
      status : 1,
      data : {
        username,
        ReplyContent,
        replyTime : 1,
        headpic
      }
    };

    sendData['data'].replyTime = new Date().getTime();
    question.findByIdAndUpdateMet('questions', {'_id' : questionId }, { $push: { 'Reply': sendData['data'] }},(err,result) =>{
      if(err){
        res.send({
          status : 0,
          msg : '插入数据失败'
        });
        return;
      }

      sendData['data'].replyTime = 1;
      res.send(sendData);
      return;
    });
  })
});

module.exports = router;