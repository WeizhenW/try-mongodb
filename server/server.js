const express = require('express');
//middleware to enable CORS
const cors = require('cors');
//use mongoose to connect with mongodb database
const mongoose = require('mongoose');
//use environment variable
require('dotenv').config();

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
//cors middleware
app.use(cors());
//allow to parse json => server will send and receive json
app.use(express.json());

//get database uri - where db is stored
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb connection established');
}).catch(error => {
    console.log('db connection error', error);
})

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require routes
const userRouter = require('./routes/user.router');
const exerciseRouter = require('./routes/exercise.router');

app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);


app.listen(port, () => {
    console.log('server running on', port);
})