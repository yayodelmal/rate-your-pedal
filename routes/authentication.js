let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/add', (req, res) => {
    res.render('profile/add');
});


module.exports = router;