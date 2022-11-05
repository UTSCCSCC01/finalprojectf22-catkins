const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubName: {type: String, required: true},
    owner: { type: String, required: true},
    description: { type: String, required: true, default: ""},
    // Set lis of tags
    clubTags: {type: [String], required: true, default: []},
    official: {type: Boolean, required:false, default: false},
    // Set list of members
    members: {type: [String], required: true, default: []} 
}, {
    timestamps: true, //when was created/modified
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;