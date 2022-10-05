const router = require('express').Router();
// mongoose model
let User = require('../models/user.model');

// Endpoint that handles http get requests
router.route('/').get((req, res) => {
    // mongoose method that will find all users from database
    User.find()
        .then(users => res.json(users)) // return json with users
        .catch(err => res.status(400).json('Error: ' + err));
})

// Endpoint handles http post requests
router.route('/add').post((req, res) => {
    // Request username to be added
    const username = req.body.username;

    // Create new User
    const newUser = new User({username});

    // mongoose method to save user to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// You need to export the router
module.exports = router;