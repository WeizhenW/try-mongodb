const express = require('express');
const router = express.Router();

//import mongoose user model
let User = require('../models/user.model');

//get all user request
router.get('/', (req, res) => {
    User.find() //mongodb method to retrieve all users from the collection
        .then(result => res.json(result))
        .catch(error => res.status(400).json('error with getting users: ' + error));
});

//post request to add a new user
router.post('/add', (req, res) => {
    const username = req.body.username;
    const newUser = new User({
        username,
    });//create a new instance of user

    newUser.save() //mongodb method to save the new instance into db
        .then(() => res.json('user added'))
        .catch(error => res.status(400).json('error with adding user: ' + error))
});


module.exports = router;