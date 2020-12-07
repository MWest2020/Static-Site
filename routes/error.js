const express = require('express');
const router = express.Router();

//ERROR HANDLERS

// router.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });
  
//   router.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.render('error');
//   });


router.get('/', (req, res) => {
   res.render('index', { data: data.projects })
})

module.exports = router;