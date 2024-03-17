const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    }
})

// userSchema.pre("save", async function () {
//     this.password = await bcrypt.hash(this.password, 12);
//   });

const User = mongoose.model('User', userSchema);

module.exports = User;