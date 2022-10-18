const router = require('express').Router();

// Mongo model
let Post = require('../models/post.model');
let Club = require('../models/club.model');

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {

    // Finds all posts from database that are public or from following
    Post.find().sort({priority: -1, createdAt: -1})

        // Json with posts
        .then(posts => res.json(posts))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exporting router
module.exports = router;