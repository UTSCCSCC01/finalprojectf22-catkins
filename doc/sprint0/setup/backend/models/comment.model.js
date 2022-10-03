const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    text: { type: String, required: true}
}, {
    timestamps: true, //when was created/modified
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;