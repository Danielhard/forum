var express = require('express');
let question = require('../models/question');
var router = express.Router();


/* GET home page. */

router.get('/',function(req,res,next){
    let userid=req.session.userId;
    if(!userid){
         

    }
    
   question.find("questions",{},function(err,result){
        if(err){
          return;
        }else{ 
          console.log(result);
          console.log(result[0]);
          res.render("index",{title:"express",result});
          }
      });
    }); 
  

module.exports = router;
