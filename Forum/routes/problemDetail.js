let express = require('express');
let question = require('../models/question');
let router = express.Router();

router.get('/:questionId', (req,res) => {
    res.render('problemDetail',{ id:req.params.questionId });
});


module.exports = router;