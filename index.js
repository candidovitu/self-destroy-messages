const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB NOT connected: ', err));

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/static', express.static('public'));
app.use(express.json());

app.use('/', routes.main);

app.listen(3000, () => {
    console.log('Running at *:3000');
});