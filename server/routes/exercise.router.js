const express = require('express');
const router = express.Router();

//import mongoose exercise model
let Exercise = require('../models/exercise.model');

//get all exercise request
router.get('/', (req, res) => {
    Exercise.find() //mongodb method to retrieve all exercises from the collection
        .then(result => res.json(result))
        .catch(error => res.status(400).json('error with getting exercise: ' + error));
});

//post request to add a new exercise
router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });//create a new instance of exercise

    newExercise.save() //mongodb method to save the new instance into db
        .then(() => res.json('exercise added'))
        .catch(error => res.status(400).json('error with adding exercise: ' + error))
});


module.exports = router;