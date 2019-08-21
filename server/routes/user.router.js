const express = require('express');
const router = express.Router();

//import mongoose user model
const User = require('../models/user.model');

//get all user request
router.get('/', (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(error => res.status(400).json('error: ' + error));
});


module.exports = router;