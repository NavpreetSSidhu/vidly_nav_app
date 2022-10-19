const Joi = require('joi')
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movie', mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 500
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        min: 0,
        max: 500
        //required: true,
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 500  
    } 
}));

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().min(4).max(500).required(),
        genreId: Joi.objId().required(),
        numberInStock: Joi.number().min(0).max(500).required(),
        dailyRentalRate: Joi.number().min(0).max(500).required(),
    });
    return schema.validate(movie);
}

exports.validate = validateMovie;
exports.Movie = Movie;
