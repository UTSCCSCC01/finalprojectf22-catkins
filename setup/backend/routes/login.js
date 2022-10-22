const router = require('express').Router();

// Mongo model
let User = require('../models/user.model');

//Login authentication
router.route('/').get((req, res) => {
    // console.log("hi");
    var username = req.body.Username;
    var password = req.body.Password;
    user = { username: username, password: password };
    User.find({username: username}).then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err));
    
    // res.redirect("/", { username: username }).status(200).json("success");
      
    // .then(() => res.json("Successfully logged in!"))
    // .catch((err, user) => {
    //   if (err) {
    //     console.log("bad1");
  
    //     return res.status(500).json("Error: " + err);
    //   }
    //   if (!user) {
    //     console.log("bad2");
  
    //     res.redirect("/login", { authentication: "false" });
    //   }
    //   users.push(user);
    //   console.log("bad");
    //   res.redirect("/", { user: username });
    // });
  });

// Exporting router
module.exports = router;