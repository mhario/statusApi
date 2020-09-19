var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/set', function(req,res, next) {
  res.send('doin it!');
});


module.exports = router;
