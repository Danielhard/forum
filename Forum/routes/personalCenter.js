let express = require('express');
let usersInfor = require('../models/userInfor');
let router = express.Router();

router.get('/', (req,res) => {
    res.render('personalCenter',{});
});


module.exports = router;
