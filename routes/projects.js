const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

router.get('/projects', (req, res,) => {
   
   res.redirect('/projects/0')
})


router.get('/projects/:id', (req, res, next) => {
   const projectId = req.params.id;
   const getProjects = projects.find( ({id}) => id === +projectId);
   if (getProjects) {
       res.render("project", { projects: projects[req.params.id] });
   } else {
       const err = new Error();
       
       next(err);}
   });



module.exports = router;