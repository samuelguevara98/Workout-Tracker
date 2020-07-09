const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchecma = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: {
        type: String,
        trim: true,
        required: "Exercise/Activity"
    },
    value: {
        type: Number,
        trim: true,
        required: "Exercise/Activity Duration"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Number of reps"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Weight"
    }
});

const Workout = mongoose.model("Workout", workoutSchecma);

module.exports = Workout;