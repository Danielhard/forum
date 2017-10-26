let express = require('express');
let question = require('../models/question');
let router = express.Router();

router.get('/', (req,res) => {
    res.render('sendQuestion',{});
});


module.exports = router;