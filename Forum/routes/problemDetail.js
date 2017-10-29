let express = require('express');
let question = require('../models/question');
let userInfor = require('../models/userInfor');
let router = express.Router();

router.get('/:questionId', (req,res) => {
  let username = req.session.username;
  var login =req.session.login;
    userInfor.findUser('userInfor',{ username },(err,resultInfor) => {
      let headpic = resultInfor[0]['headPic'];
      console.log(headpic);
      res.render('problemDetail',{ id:req.params.questionId ,login,headpic});
    })

});



module.exports = router;