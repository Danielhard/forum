let express = require('express');
let usersInfor = require('../models/userInfor');
let question = require('../models/question');
let commonJS = require('../models/commonJS');
let path = require('path');
let formidable = require('formidable');
let router = express.Router();
let fs = require('fs');



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
        headpic = result[0].headpic;
        // headpic = commonJs.Trim(result[0].headPic,'g');
      }
    });
  
    question.findUser("questions", {}, function (err, result) {
      if (err) {
        return;
      } else {}
      res.render('personalCenter', {
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








router.post('/headPic',(req,res) => {
    let form = new formidable.IncomingForm();

    form.uploadDir = path.join(__dirname, '../public/images');

    form.parse(req);

    form.on('end', function () {
        console.log('upload success')
    });

    form.on('file', function (field, file) {//file是上传的文件
        // 5.5.1 更改上传文件的名字
        // 使用同步更改

        let username = req.session.username;
        fs.renameSync(file.path, path.join(form.uploadDir, '/'+ username +'headPic.png'))
        // 第一个参数file.path表示上传的文件所在的路径
        // 5.5.2发送给浏览器端(客户端)
        let headPicUrl = './images / '+ username +'headPic.png';
       
        usersInfor.updateData('userInfor', { username }, { headPic : headPicUrl },null,function(err,result) {
            console.log(result);
        })

        res.send({
            url : headPicUrl
        });

     
    })
   
    return;

})


router.post('/personalmessage',(req,res)=>{
	
	
	   let{nickname,job,company,selfIntroduction,personalWebsite} =req.body;
     let userid = req.session.userId;
     console.log(userid);
    usersInfor.updateData("userInfor",{ userid },{nickname,job,company,selfIntroduction,personalWebsitee},function(err,result){
    	 console.log(result);
    	 res.send('success');
    	return ;
    });
    
    
	
	
	
});
module.exports = router;
