let express = require('express');
let users = require('../models/users');
let commonJS  = require("./../models/commonJS");
let router = express.Router();

/* login page */
router.post('/',(req,res) => {
    let {username, password} = req.body;
    
    // 调用查找用户的方法
    users.findUser('users', { username }, (err,result) => {
        if (err) {
            res.send({
                status:-5,
                msg:"请求失败"
            });
            return;
        }
        if(result.length == 0){
            res.send({
                status:-1,
                msg:"账号未注册"
            });
            return;
        }

        if(commonJS.encryption(password) === result[0].password){
            req.session.username = result[0].username;
            req.session.userId =  result[0]._id;
           console.log(req.session.userId);
            res.send({
                status:1,
                msg:"登陆成功"
            });
            return;
        }else{
            res.send({
                status:-2,
                msg:"密码错误"
            });
            return;
        }

    });
});

router.get('/',(req,res) => {
    res.send("333");
})

module.exports = router;