const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    username: {type: String, required: true},
    group: {type: String, required: true},
    description: {type: String, required: true}
}, {
    timestamps: true, //when was created/modified
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;