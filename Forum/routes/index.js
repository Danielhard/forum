var express = require('express');
let question = require('../models/question');
var router = express.Router();


/* GET home page. */

router.get('/',function(req,res,next){
  // let {username,title,tag,content,time} = req.body;
  // var query =req.query.page;
   question.find("questions",{},function(err,result){
        if(err){
          return;
        }else{ 
          // res.json(data);
          console.log(result);
          console.log(result[0]);
          // let data =[];
          res.render("index",{title:"express",result});
          // res.send('获取成功');
        }
      });
    }); 
  

module.exports = router;
