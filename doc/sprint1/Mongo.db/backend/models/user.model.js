const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true, //trim white spaces in the end
        minlength: 3
    },
    password : { 
        required: true,
        type: String,
        minlenght: 6
    }
}, {
    timestamps: true, //when was created/modified
})

const User = mongoose.model('User', userSchema);

module.exports = User;