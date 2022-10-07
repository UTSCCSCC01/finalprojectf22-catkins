const router = require('express').Router();

// Mongo model
let Post = require('../models/post.model');
let Club = require('../models/club.model');

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {

    // Finds all posts from database
    Post.find()

        // Json with posts
        .then(posts => res.json(posts))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint that takes care of http post requests
router.route('/add').post((req, res) => {

    // Request variables necessary
    const title = req.body.title;
    const username = req.body.username;
    const group = req.body.group;
    const description = req.body.description;
    const public = req.body.public;
    const priority = req.body.priority;

    // Check if club exists
    Club.find({name: group}, (err, clubs) => {

        // Error catching
        if (err) {
            res.status(400).json('Error: ' + err);
            return;
        }

        // Checking
        if (clubs.length) {

            // Create new post instance
            const newPost = new Post({
                title,
                username,
                group,
                description,
                public,
                priority
            });

            // Save post to database
            newPost.save()

                // Feedback
                .then(() => res.json('Posted'))

                // Error catching
                .catch(err => res.status(400).json('Error: ' + err));

        } else {
            req.json('Group doesn\'t exist');
        }
    });


});

// Get request post information based on URI
router.route("/:id").get((req, res) => {

    // Finds post
    Post.findById(req.params.id)

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

// Editing post on update request
router.route('/update/:id').post((req, res) => {

    // Finding post by ID
    Post.findById(req.params.id)

    // Updating post info
    .then(post => {
        post.name = req.body.name;
        post.username = req.body.username;
        post.group = req.body.group;
        post.description = req.body.description;
        post.public = req.body.public;
        post.priority = req.body.public;

        post.save()

        // Feedback
        .then(() => res.json("Post Edited"))

        // Error catching
        .catch(err => res.status(400).json("Error: " + err));
    })

    // Error catching
    .catch(err => res.status(400).json("Error: " + err));
});

// Exporting router
module.exports = router;