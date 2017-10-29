var express = require('express');
let moment = require('moment');
let userInfor = require('../models/userInfor');
let question = require('../models/question');
let commonJs = require('../models/commonJS');
var router = express.Router();

/* GET users listing. */

router.get('/issue',(req,res) => {
  let username = req.session.username;
  var login =req.session.login;
  // 通过username查询到该用户提的所有问题
  question.findUser('questions',{username}, (err,result) =>{
    for(var i = 0; i<result.length; i++){
      let data = new Date(parseInt(result[i]['time']));
      console.log(moment(data).format('LLL'));
      result[i]['time'] = moment(data).format('LLL');
      result[i]['Reply'][0] = result[i]['Reply'].length;
    }

    userInfor.findUser('userInfor',{ username },(err,resultInfor) => {
      let headpic = resultInfor[0]['headPic'];
      headpic = '../' + commonJs.Trim(headpic, 'g');
      res.render('issue',{ result,login,headpic});
    })
  });
});

module.exports = router;
