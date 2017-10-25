let express = require('express');
let users = require('../models/users');
let router = express.Router();

router.get('/', (req,res) => {
    res.render('problemDetail',{});
});


module.exports = router;