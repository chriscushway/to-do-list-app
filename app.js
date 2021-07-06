const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req, res, next) => {
    res.send('<h1>Hello world</h1>');
});

app.listen(3000);