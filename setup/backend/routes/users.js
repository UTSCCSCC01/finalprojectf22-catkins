const router = require('express').Router();
const { useSelector } = require('react-redux');
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
    // Request password to be added
    const password = req.body.password
    // Request role to be added
    const role = req.body.role
    // The users following is initially set to empty
    const following = []

    // Create new User
    const newUser = new User({username, password, role, following});

    // mongoose method to save user to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Find user based on name
router.route('/search').get((req, res) => {
    
    const username = req.body.name;
    // Search
    User.find({username: name})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get information about the user on the URI
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// Get information about the user on the username
router.route("/getUser/:username").get((req, res) => {
    User.findOne({username : req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// delete the user with that id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update the user
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.password = req.body.password
        user.role = req.body.role
        user.following = req.body.following

        user.save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// You need to export the router
module.exports = router;