const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    workout.find({}).then(dbWorkouts => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    workout.create({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance
    }).then(function(dbWorkout) {
        res.json(dbWorkout);
    });
});

router.get("/api/workouts/range", (req, res) => {
    workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)

    workout.update({
        _id: req.params.id
    },
    {
        $push: { exercise: req.body }
    }
    ).then(function (workout) {
        res.json(workout)
    })
});

module.exports = router;