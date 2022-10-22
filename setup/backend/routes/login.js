const router = require('express').Router();

// Mongo model
let User = require('../models/user.model');

//Login authentication
router.route('/').get((req, res) => {
    // console.log("hi");
    var username = req.body.Username;
    var password = req.body.Password;
    user = { username: username, password: password };

    result = User.find({username: username}).exec(function (err, user){
      console.log(user.username);
      res.json(user);
      err => res.status(400).json('Error: ' + err);
    });
  });

// Exporting router
module.exports = router;