var express = require('express');
var router = express.Router();




// Home
router.get('/', (req, res) => {
  res.json({"tipo": "api"})
})




module.exports = router;
