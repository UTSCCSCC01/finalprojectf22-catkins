const router = require('express').Router();

// Mongo model
let Post = require('../models/post.model');
let Club = require('../models/club.model');
let User = require('../models/user.model');

// Endpoint that takes care of http get requests gets all clubs by default
router.route('/').get((req, res) => {

  // Finds all clubs from database
  Club.find()

      // JSON with clubs
      .then(clubs => res.json(clubs))

      // Error catching
      .catch(err => res.status(400).json('Error: ' + err));
});

// Searching for posts by title
router.route('/posts').get((req, res) => {

    // Request post title
    const title = req.body.title || req.query.title;

    // Finds all posts from database that contain substring in title
    Post.find({title: {$regex: title}}).sort({priority: -1, createdAt: -1})

        // Json with posts
        .then(posts => res.json(posts))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Searching for user by user name
router.route('/users').get((req, res) => {

    // Request club name
    const username = req.body.username || req.query.username;

    // Finds all users from database that contain substring
    User.find({username: {$regex: username}}).sort({following: -1})

        // Json with users
        .then(users => res.json(users))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Searching for groups by club name
router.route('/groups').get((req, res) => {

    // Request club name and tags
    const clubName = req.body.clubName || req.query.clubName || ''; // If no clubName found assume only tags search
    const clubTags = req.body.clubTags || req.query.clubTags || []; // If no clubTags found assume only name search
    console.log(clubName, clubTags);

    if ((Array.isArray(clubTags) && clubTags.length) && clubName.length > 0) {

        // Finds all groups from database that contain substring or all tags
        Club.find({$and: [{clubName: {$regex: clubName}}, {clubTags: {$all: clubTags}}]}).sort({members: -1})

            // Json with groups
            .then(clubs => res.json(clubs))

            // Error catching
            .catch(err => res.status(400).json('Error: ' + err));

    } else if (Array.isArray(clubTags) && clubTags.length) {
        
        // Finds all groups from database that contain substring only
        Club.find({clubTags: {$all: clubTags}}).sort({members: -1})

            // Json with groups
            .then(clubs => res.json(clubs))

            // Error catching
            .catch(err => res.status(400).json('Error: ' + err));

    } else {

        // Search only name no tags
        Club.find({clubName: {$regex: clubName}}).sort({members: -1})

            // Json with groups
            .then(clubs => res.json(clubs))

            // Error catching
            .catch(err => res.status(400).json('Error: ' + err));
    }
});

// Exporting router
module.exports = router;