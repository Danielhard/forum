let express = require('express');
let question = require('../models/question');
let router = express.Router();

router.get('/', (req,res) => {
    res.render('sendQuestion',{});
});

router.post("/subProblem",(req,res) => {
  console.log(req.query);
  let {username,title,tag,content,time} = req.body;
  question.insertData('questions',{username,title,tag,content,time},function (err,result) {
    if(err){
      res.send("问题未能成功布");
    }else if(title == ''||tag == ''|| content == ''){
      res.send("您有未填写项目，发布失败");
    }else {res.send("问题发布成功");}
  });
});

module.exports = router;