const mongoose = require('mongoose');

const courseRegisterModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const Course = mongoose.model('Course', courseRegisterModel);

module.exports = Course;