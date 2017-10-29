let express = require('express');
let question = require('../models/question');
let userInfor = require('../models/userInfor');
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
    console.log(result);
    returnData.username = result[0].username;
    returnData.content = result[0].content;
    returnData.title = result[0].title;
    returnData.time = moment(new Date(parseInt(result[0].time))).format("LLL");
    returnData.reply = result[0].Reply;

    console.log(returnData);

    userInfor.findUser('userInfor', {
      username
    }, (err, resultInfor) => {
      let headpic = resultInfor[0]['headPic'];
      console.log(headpic);
      returnData.id=req.params.questionId;
      returnData.login= login;
      returnData.headpic=headpic;
      res.render('problemDetail', returnData);
    })


  });
});



module.exports = router;