const router = require('express').Router();
let Club = require('../models/club.model');

// Endpoint that takes care of http get requests
router.route('/').get((req, res) => {
    // Finds all clubs from database
    Club.find()
        .then(clubs => res.json(clubs))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint that takes care of http post requests
router.route('/add').post((req, res) => {
    // Request variables necessary
    const username = req.body.username;
    const name = req.body.name;
    const description = req.body.description;
    const clubType = req.body.clubType;

    // Create new instance of club
    const newClub = new Club({
        name,
        username, 
        description, 
        clubType,    
    });

    // Save club to database
    newClub.save()
        .then(() => res.json('Club added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

// Find club based on name
router.route('/search').get((req, res) => {
    
    const name = req.body.name;
    // Search
    Club.find({name: name})
    .then(club => res.json(club))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get information about the club on the URI
router.route("/:id").get((req, res) => {
    Club.findById(req.params.id)
    .then(club => res.json(club))
    .catch(err => res.status(400).json("Error: " + err));
});

// delete the club with that id
router.route('/:id').delete((req, res) => {
    Club.findByIdAndDelete(req.params.id)
    .then(() => res.json("Club deleted."))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update the club
router.route('/update/:id').post((req, res) => {
    Club.findById(req.params.id)
    .then(club => {
        club.name = req.body.name;
        club.username = req.body.username;
        club.description = req.body.description;
        club.clubType = req.body.clubType;

        club.save()
        .then(() => res.json("Club updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;