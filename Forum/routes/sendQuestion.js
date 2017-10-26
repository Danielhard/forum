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
    if(err) throw err;
    res.send("问题发布成功");
  });
});




module.exports = router;