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

//get one exercise by objectId
router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(result => res.json(result))
        .catch(error => res.status(400).json('error with getting one exercise: ' + error))
});

//delete one exercise by objectId
router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('exercise deleted'))
        .catch(error => res.status(400).json('error with deleting exercise: ' + error))
});

//put request to update one exercise
router.put('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(result => {
            result.duration = req.body.duration,
                result.description = req.body.description

            result.save()
                .then(() => res.json('exercise updated'))
                .catch(error => res.status(400).json('error with saving exercise: ' + error))
        })
        .catch(error => res.status(400).json('error with updating exercise: ' + error))
})


module.exports = router;