var express = require('express');
var router = express.Router();
// MongoDB
var bd = require('../modules/bd');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Content-Type', 'application/json');
	bd.getAverts(res);
});

module.exports = router;
