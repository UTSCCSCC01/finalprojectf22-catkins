const router = require('express').Router();

// Mongo model
let Post = require('../models/post.model');
let Club = require('../models/club.model');

// Test user for now
const student = 	{
    "_id": "633e2d62c31ac0ed271ce079",
    "username": "mario",
    "password": "mariopassword",
    "role": "student",
    "following": [
      "Badminton", "Music Club"
    ],
    "createdAt": "2022-10-06T01:20:34.736Z",
    "updatedAt": "2022-10-06T01:26:44.070Z",
    "__v": 8
  }

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {

    // Finds all posts from database that are public or from following
    Post.find({$or: [{public: true}, {group: {$in: student.following}}]}).sort({createdAt: -1})

        // Json with posts
        .then(posts => res.json(posts))

        // Error catching
        .catch(err => res.status(400).json('Error: ' + err));
});

// Exporting router
module.exports = router;