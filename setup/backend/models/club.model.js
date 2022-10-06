const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true},
    owner: { type: String, required: true},
    description: { type: String, required: true},
    // Set lis of tags
    clubTags: [{type: String, required: true}],
    // Set list of members
    members: [{type: String, required: false}] 
}, {
    timestamps: true, //when was created/modified
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;