let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;