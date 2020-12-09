/*
*   Standard requiring of the express framework and assigning it to the variable router. Minimalistic *routing to the 'about' page. Exported the piece of code (module) via express call.
*/

const express = require('express');
const router = express();

router.get('/about', (req, res) => {
   res.render(`about`)
});


module.exports = router;