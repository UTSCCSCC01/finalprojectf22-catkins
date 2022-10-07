import User from "./user.model";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true},
    owner: { type: String, required: true},//username of owner
    description: { type: String, required: true},
    // Set list of tags
    clubTags: [{type: String, required: true}],
    // Set list of members
    members: [{type: String, required: false}] // elements are usernames
}, {
    timestamps: true, //when was created/modified
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;