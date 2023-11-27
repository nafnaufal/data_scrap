const express = require('express');
const morgan = require('morgan');
const app = express()

const routes = require('./routes');
const port = 3000

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
    console.log(`App on http://localhost:${port}`)
})

app.use((req, res) => {
    res.status(404).render('404')
})