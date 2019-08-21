const express = require('express');
const cors = require('cors');
//use environment variable
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//cors middleware
app.use(cors());
//allow to parse json => server will send and receive json
app.use(express.json());


app.listen(port, () => {
    console.log('server running on', port);
})