const express = require('express');
const router = express();
const  data  = require('../data.json');

router.get('/', (req, res) => {
   res.render('index', { data: data.projects })
})

module.exports = router;