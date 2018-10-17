var express = require('express');
var router = express.Router();
// MongoDB
var bd = require('../modules/bd');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	// res.send(JSON.stringify(bd.addUser(), null, 3));
	bd.getAverts(res);
});

module.exports = router;
