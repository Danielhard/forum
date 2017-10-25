let express = require('express');
let users = require('../models/users');
let router = express.Router();

/* login page */
router.post('/',(req,res) => {
    let {username, password} = req.body;

    // 调用查找用户的方法
    users.findUser('users', { username }, (err,result) => {
        if(err) throw err;
        res.send('' + result);
    });
});

module.exports = router;