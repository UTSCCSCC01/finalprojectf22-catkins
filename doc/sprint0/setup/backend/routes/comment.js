const router = require('express').Router();

// Mongo model
let Comment = require('../models/comment.model');

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {

    // Finds all posts from database
    Post.find()

        // Json with posts
        .then(comment => res.json(comment))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint that takes care of http post requests
router.route('/add').post((req, res) => {

    // Request variables necessary
    const text = req.body.text;
    const postedBy = req.body.postedBy;

    // Create new post instance
    const newComment = new Comment({
        text,
        postedBy,
    });

    // Save post to database
    newPost.save()

        // Feedback
        .then(() => res.json('Commented'))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get request post information based on URI
router.route("/:id").get((req, res) => {

    // Finds post
    Comment.findById(req.params.id)

    // Json with post
    .then(post => res.json(post))

    // Error catching
    .catch(err => res.status(400).json("Error: " + err));
});

// Delete request a post by ID
router.route('/:id').delete((req, res) => {

    // Find post
    Post.findByIdAndDelete(req.params.id)

    // Feedback
    .then(() => res.json("Post deleted"))

    // Error catching
    .catch(err => res.status(400).json('Error: ' + err));
});

// Exporting router
module.exports = router;