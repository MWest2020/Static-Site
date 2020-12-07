const express = require('express');
const router = express.Router();
// const data  = require('../data.json');

// console.log('projects connected');


const {projects} = require('../data.json');
router.get('/projects/:id', (req, res, next) => {
   const projectId = req.params.id;
   const getProjects = projects.find( ({id}) => id === +projectId);
   if (getProjects) {
       res.render("project", { projects: projects[req.params.id] });
   } else{
       const err = new Error();
       err.status = 404;
       err.message = `The project that you requested doesn't exist!`
       next(err);}
   });



router.get('/', (req, res,) => {
   
   res.redirect('/projects/0')
})




// router.get('/:id', (req, res, next) => {
//    const { projects } = data
//    if (projects[req.params.id]){
//       res.render('project', { projects: projects[req.params.id] }) //projects[req.params.id] send the correct data to the pug  => req.params.id will reference :id
//    } else {
//        // otherwise throw the default error
//        const err = new Error('Project Page Not Found');
//        err.status = 404;
//        next(err);
//    }
// })


module.exports = router;