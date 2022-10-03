const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, 
            unique: true,
            required: true},
    owner: { type: String, required: true},
    description: { type: String, required: true},
    // We would want this to be a list of tags
    clubTags: {type: String, required: true},
    // We would want a list of members
    members: {type: String, requited: false}, 
}, {
    timestamps: true, //when was created/modified
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;