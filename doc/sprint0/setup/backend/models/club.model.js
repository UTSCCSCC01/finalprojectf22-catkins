const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true},
    username: { type: String, required: true},
    description: { type: String, required: true},
    clubType: {type: String, required: true}, 
}, {
    timestamps: true, //when was created/modified
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;