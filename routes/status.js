var express = require('express');
var router = express.Router();

const fs = require('fs');

router.get('/getAll', function(req, res, next) {
  // res.end('respond with a resource');
  fs.readFile('status.txt', 'utf-8', (err, status) => {
    if(! status.length) return res.end(null);
    res.send( JSON.parse(status) )
  });
});

router.post('/set', async function(req,res, next) {
  let newStatus = req.body;
  console.log("newStatus", newStatus);

  fs.readFile('status.txt', 'utf-8', (err, status) => {
    if( ! status ) {
      newStatus = [ newStatus ];
    } else {
      const latestStatus = JSON.parse(status);
      newStatus = latestStatus.concat([newStatus]);
    }

    console.log("newStatus", newStatus);

    fs.writeFile('status.txt', JSON.stringify(newStatus), (err,data) => {
      if (err) throw err;
      res.sendStatus(201)
    })
  });

});


module.exports = router;
