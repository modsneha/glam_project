const mongoose = require('mongoose');

const ReviewModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const Review = mongoose.model('Review', ReviewModel);

module.exports = Review;