let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/add', function(req, res, next) {
    res.render('profile/add');
});

router.post('/add', function(req, res, next) {
    res.send('recived');
});
router.post('received');

module.exports = router;