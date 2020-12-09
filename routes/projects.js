/* 
 * Standard requiring of the express framework and assigning it to the variable router. Minimalistic routing to the 'index' page. Renders with project'objects from the json. Exported the piece of code (module) via express call.
 */   
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//simple rerouting for lacking a 's' or no numeric value assigned
router.get('/projects', (req, res,) => {
   res.redirect('/projects/0')
})

router.get('/project', (req, res,) => {
    res.redirect('/projects/0')
 })

 //Code is pretty much the same from the pastry workshop from Guill

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