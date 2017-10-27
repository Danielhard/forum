let express = require('express');
let users = require('../models/users');
let commonJS = require("./../models/commonJS");
let router = express.Router();

router.post('/',(req,res) => {

  
    let {username, password} = req.body;
    console.log(password);
    users.findUser("users", {"username": username}, function (err, result) {
        if (err) {
            res.send({
                status:-3,
                msg:"服务器错误"
            }); //服务器错误 
            return;
        }

        console.log(result);
        if (result.length != 0) {
            res.send({
                status : 0,
                msg : '用户已被注册'
            }) //被占用
            return;
        }
        // //没有相同的人，就可以执行接下来的代码了：
        // //设置md5加密
        let passwordScr = commonJS.encryption(password);

        // //现在可以证明，用户名没有被占用
        users.insertData("users", {
            "username": username,
            "password": passwordScr,
        }, function (err, result) {
            if (err) {
                res.send({
                    status:-3,
                    msg:"服务器错误"
                }); //服务器错误
                return;
            }

            console.log(username);
            req.session.login = "1";

            req.session.username = username;

            console.log(req.session.username);
           
            res.send({
                status : 1,
                msg : '注册成功'
            }); //注册成功，写入session
            return;
        })
    });
});

module.exports = router;