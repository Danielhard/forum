let express = require('express');
let users = require('../models/users');
let router = express.Router();

router.post('/',(req,res) => {
    let {username, password} = req.body;
    users.insertData('users',{username,password},function(err,result) {
        if(err) throw err;
        
        console.log('插入数据成功,用户id:' + result._id);
        res.send("插入数据成功");
    })
});

module.exports = router;