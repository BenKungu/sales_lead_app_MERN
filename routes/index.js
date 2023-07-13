var express = require('express');
var router = express.Router();

let indexCont = require('../controllers/indexCont');

/* GET home page. */
router.get('/', index.indexCont);

module.exports = router;
