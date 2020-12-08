const express = require('express');
const pug = require('pug');
const data = require('./data.json');
const app = express();

const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const aboutRoute = require('./routes/about');


app.set('view engine', 'pug');

app.use(mainRoutes);
app.use(aboutRoute);
app.use(projectRoutes);

//static', 
app.use('/static', express.static('./public'));


app.listen(process.env.PORT || 3000, () => console.log(`Server is listening on port 3000`))


// app.use((req, res, next) => {
//     const err = new Error(`That project doesn't exist(yet). Feel free to contact us and we will make it for you!`);
//     err.status = 404;
//     next(err);
//   });



app.use((req, res, next) => {
    const err = new Error(`Below is the stack. It's only interesting for developers`);
    // You can test error codes here. 418 is a nice one.
    err.status = 404;
    next(err);
  });
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    if(err.status === 404){
        res.render('page-not-found')
    } else{
        res.render('error');
    };
});




