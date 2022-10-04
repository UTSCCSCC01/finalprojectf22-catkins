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

    const emptyList = []

    // Create new User
    const newUser = new User({username, emptyList});

    // mongoose method to save user to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Get information about the user on the URI
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update the user
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.following = req.body.following

        user.save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// You need to export the router
module.exports = router;