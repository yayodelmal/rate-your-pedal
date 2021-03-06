let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/dashboard', (req, res) => {
    res.render('profile/dashboard');
});


router.get('/dashboard/add', (req, res) => {
    res.render('profile/add');
});

router.post('/dashboard/add', async(req, res) => {
    const { rp_titulo, rp_marca, rp_tipo, rp_modelo, rp_estado, rp_precio, rp_descripcion, rp_img1, rp_demo } = req.body;
    const newLink = {
        rp_titulo,
        rp_marca,
        rp_tipo,
        rp_modelo,
        rp_estado,
        rp_precio,
        rp_descripcion,
        rp_img1,
        rp_demo
    };
    await pool.query('INSERT INTO ryp_pedal set ?', [newLink]);
    req.flash('success', 'Success');
    res.redirect('/dashboard/sales');
});

router.get('/dashboard/sales', async(req, res) => {
    const sales = await pool.query('SELECT * FROM ryp_pedal ');
    res.render('profile/sales', { sales });
});

router.get('/dashboard/sales/delete/:id_pedal', async(req, res) => {
    const { id_pedal } = req.params;
    await pool.query('DELETE FROM ryp_pedal WHERE id_pedal = ?', [id_pedal]);
    req.flash('success', 'Success');
    res.redirect('/dashboard/sales');
});

router.get('/dashboard/sales/edit/:id_pedal', async(req, res) => {
    const { id_pedal } = req.params;
    const edit = await pool.query('SELECT * FROM ryp_pedal WHERE id_pedal = ?', [id_pedal]);
    console.log(edit[0]);
    res.render('profile/edit', { edit: edit[0] });
});

router.post('/dashboard/sales/edit/:id_pedal', async(req, res) => {
    const { id_pedal } = req.params;
    const { rp_titulo, rp_marca, rp_tipo, rp_modelo, rp_estado, rp_precio, rp_descripcion, rp_img1, rp_demo } = req.body;
    const newLink = {
        rp_titulo,
        rp_marca,
        rp_tipo,
        rp_modelo,
        rp_estado,
        rp_precio,
        rp_descripcion,
        rp_img1,
        rp_demo
    };
    await pool.query('UPDATE ryp_pedal  set ? WHERE id_pedal = ?', [newLink, id_pedal]);
    req.flash('success', 'Success');
    res.redirect('/dashboard/sales');
});
module.exports = router;