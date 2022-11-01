const router = require('express').Router();

// Mongo model
let Post = require('../models/post.model');
let Club = require('../models/club.model');
let Comment = require('../models/comment.model');
const { default: mongoose } = require('mongoose');
const { prependOnceListener } = require('../models/user.model');

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {

    // Finds all posts from database that are public or from following
    Post.find().sort({priority: -1, createdAt: -1})

        // Json with posts
        .then(posts => res.json(posts))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint for adding a comment with a post request
router.route('/reply').post((req, res) => {

    // The user in question that is commenting
    const author = req.body.author || req.query.author;
    
    // The text being commented
    const content = req.body.content || req.query.content;

    // The post that the user is commenting to
    const parent = req.body.parent || req.query.parent;

    // The comment on the post they are replying to
    const replying = req.body.replying || req.query.replying || null;

    // Make new comment object
    const newComment = new Comment({author, content, replying});
    if (!replying) {
        newComment = new Comment({author, content, parent});
    }


    // Updating post/comment
    Post.findById(parent).then(post => {
        if (!replying) {
            Post.findByIdAndUpdate(parent, {$push: {comments: newComment}})
            .then(() => res.json("Commented"))
            .catch(err => res.status(400).json("Error: " + err));
        } else {
            Post.findById(parent).then((post) => {
                for (let i = 0; i < post.comments.length; i++) {
                    var currentComment = post.comments[i];

                    if (currentComment._id == replying) {
                        currentComment.replies.push(newComment);
                    }
                }
            });
            
        }
    });
    
});

// Exporting router
module.exports = router;