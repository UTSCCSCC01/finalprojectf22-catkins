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

// Searching for user by user name
router.route('/users').get((req, res) => {

    // Request club name
    const username = req.body.username;

    // Finds all users from database that are public or from following
    User.find({username: {$regex: username}}).sort({following: -1})

        // Json with users
        .then(users => res.json(users))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Searching for groups by club name
router.route('/groups').get((req, res) => {

    // Request club name
    const clubName = req.body.clubName;

    // Finds all groups from database that are public or from following
    Club.find({clubName: {$regex: clubName}}).sort({members: -1})

        // Json with groups
        .then(clubs => res.json(clubs))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exporting router
module.exports = router;