var express = require('express');
let moment = require('moment');
let userInfor = require('../models/userInfor');
let question = require('../models/question');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });









router.get('/issue',(req,res) => {
  let username = req.session.username;

  // 通过username查询到该用户提的所有问题
  question.findUser('questions',{username}, (err,result) =>{
    console.log(result);
    for(var i = 0; i<result.length; i++){
      let data = new Date(parseInt(result[i]['time']));
      console.log(moment(data).format('LLL'));
      result[i]['time'] = moment(data).format('LLL');
      result[i]['Reply'][0] = result[i]['Reply'].length;
    }

    console.log(result);
    res.render('issue',{ result });
  });
});



module.exports = router;
