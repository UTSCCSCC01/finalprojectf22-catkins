const router = require("express").Router();

// Mongo model
let Club = require("../models/club.model");
let Post = require("../models/post.model");

// Endpoint that takes care of http get requests
router.route("/").get((req, res) => {
  // Finds all clubs from database
  Club.find()
    .then((clubs) => res.json(clubs))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Endpoint that takes care of http post requests
router.route("/create").post((req, res) => {
  // Request variables necessary
  const owner = req.body.owner;
  const clubName = req.body.clubName;
  const description = req.body.description;
  const clubTags = req.body.clubTags;

  // Create new instance of club
  const newClub = new Club({
    clubName,
    owner,
    description,
    clubTags,
  });

  // Save club to database
  newClub
    .save()
    .then(() => res.json("Club added!"))
    .catch((err) => res.status(400).json("Error: " + err));

  console.log("Club Added!");
});

// Find club based on name
router.route("/search").get((req, res) => {
  const clubName = req.body.name;
  // Search
  Club.find({ clubName: clubName })
    .then((club) => res.json(club))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get information about the club on the URI
router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  Club.findById(req.params.id)
    .then((club) => res.json(club))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete the club with that id
router.route("/:id").delete((req, res) => {
  Club.findByIdAndDelete(req.params.id)

    .then(() => res.json("Club deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update the club
router.route("/update/:id").post((req, res) => {
  Club.findById(req.params.id)
    .then((club) => {
      club.owner = req.body.owner;
      club.clubName = req.body.clubName;
      club.description = req.body.description;
      club.clubTags = req.body.clubTags;

      club
        .save()
        .then(() => res.json("Club updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update the user
router.route("/join").post((req, res) => {
  Club.findOne({ clubName: req.body.club_name }).then((club) => {
    console.log(club);
    if (!club.members.includes(req.body.username)) {
      club.members.push(req.body.username);
    }

    club
      .save()
      .then(() => res.json("Club updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// Get all posts com specific club
router.route("/:clubName/posts").get((req, res) => {
  // Finds post
  Post.find({ group: req.params.clubName })

    // Sort in chronological + importance
    .sort({ priority: -1, createdAt: -1 })

    // Json with post
    .then((post) => res.json(post))

    // Error catching
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
