var express = require('express');

var router = express.Router();
let userInfor = require('../models/userInfor');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('issue', {});
});


module.exports = router;