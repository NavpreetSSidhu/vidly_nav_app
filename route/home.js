
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {title: 'Vidly Moviews', message: 'Welcome to Vidly World!'});
});

module.exports = router;