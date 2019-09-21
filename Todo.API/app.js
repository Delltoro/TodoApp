//require('babel-core/register');

require('./src/data/db')
const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')

const users = require('./src/routes/users');
const tasks = require('./src/routes/tasks');
const login = require('./src/routes/login');


app.set('port', 5000);
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('tiny'));
app.use(helmet());


app.use('/api/users', users);
app.use('/api/tasks', tasks);
app.use('/api/login', login);


let server = app.listen(app.get('port'), () => {
    var port = server.address().port;
    console.log('All run on port: ' + port)
})