const express = require('express');
const router = express();

router.get('/about', (req, res) => {
   
    res.render(`about`)
});


module.exports = router;