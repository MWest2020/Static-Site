const express = require('express');
const pug = require('pug');
const data = require('./data.json');
const app = express();

const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const aboutRoute = require('./routes/about');
const errorRoutes = require('./routes/error');


app.set('view engine', 'pug');

console.log('app connected');


app.use(mainRoutes);
app.use(aboutRoute);
app.use(projectRoutes);
app.use(errorRoutes);
//static', 
app.use('/static', express.static('./public'));


app.listen(process.env.PORT || 3000, () => console.log(`Server is listening on port 3000`))





