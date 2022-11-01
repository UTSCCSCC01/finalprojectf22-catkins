const mongoose = require("mongoose");

let Comment = require('../models/comment.model');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    username: {type: String, required: true},
    group: {type: String, required: true},
    description: {type: String, required: true, default: ""},
    public: {type: Boolean, required: true},

    // Sorting priotity, higher int shown first
        // Normal posts - 0, Questions - 1, Announcements - 2
    priority: {type: Number, required: true, default: 0},

    // Contains URL of the image included with the post if it has one
    image: {type: String, required: false, default: ""},

    // List of all comments made on that post
    comments: {type: [], required: true, default: []}

}, {
    timestamps: true, //when was created/modified
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;