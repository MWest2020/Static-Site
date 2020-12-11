const express = require('express');
const app = express();

//requiring the router routings.
const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const aboutRoute = require('./routes/about');

// sets view engine to pug, so we van use the pug templates in the views folder
app.set('view engine', 'pug');

app.use(mainRoutes);
app.use(aboutRoute);
app.use(projectRoutes);

//to access the public file for CSS and images, etc
app.use('/static', express.static('./public'));

// Starts the app. process.env.PORT is necessary for deploying on Heroku
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening on port 3000`))

/*
*  Error handling for global errors and the 404
*/

app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = "Page not found";
    next(err);
});
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    err.status = err.status = err.status || 500;
    if(err.status === 404){
        res.render('page-not-found')
    } else {
        err.message = `Below is the stack. It's only interesting for developers`
        res.render('error', {err} );
    }

});