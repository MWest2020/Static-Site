const express = require('express');
const app = express();

const data = require('data.json');
const { render } = require('pug');

app.set('view engine', 'pug');

app.use('/static', express.static('/public'));

app.get('/', (req, res) => {
    //set locals to data.projects
    res.locals = data.json;
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('home');
})

app.listen(3000, () => { console.log('app is listening on port 3000');
});