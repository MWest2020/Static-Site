/* 
 * Standard requiring of the express framework and assigning it to the variable router. Minimalistic routing to the 'index' page. Renders with data object's project property from the json. Exported the piece of code (module) via express call.
 */   

const express = require('express');
const router = express();
const  data  = require('../data.json');

router.get('/', (req, res) => {
   res.render('index', { data: data.projects })
})

module.exports = router;