const express = require("express");
const cors = require("cors");
// helps connect to mongo.db
const mongoose = require("mongoose");
let User = require("./models/user.model");

// Environment variables in .env file
require("dotenv").config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Allows us to parse Json
app.use(cors());
app.use(express.json());

// database uri - get from ATLAS Dashboard
const uri = process.env.ATLAS_URI;
// use NewUrlParser - to deal with new updates
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
// Onde connection is open, it will register in the log
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Requiring the files
const clubsRouter = require("./routes/clubs");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const feedRouter = require("./routes/feed");
const searchRouter = require("./routes/search");
const { db } = require("./models/post.model");

// When they go to /location, they will go to that router
app.use("/clubs", clubsRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/feed", feedRouter);
app.use("/search", searchRouter);

// Starts listening to a PORT
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Login authentication
app.post("/login", (req, res) => {
  // console.log("hi");
  var username = req.body.Username;
  var password = req.body.Password;
  console.log("hi");

  console.log(req.body);

  user = { username: username, password: password };
  console.log(user);
  const result = User.find({ username: username, password: password });
  if (result) {
    if (result.password === password) {
      console.log("here1");
      res.redirect("/", { username: username }).status(200).json("success");
    } else {
      console.log("here2");
      console.log(result);

      res.status(404).json("wrong password or not found");
    }
  } else {
    console.log("here3");

    res.status(404).json("wrong password or not found");
  }
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
// You need to export the router
app.post("/clubs", (req, res) => {
  db.collection("clubs")
    .updateOne({ _id: members }, { $push: { members: req.body } })
    .then((result) => {
      res.status(201).json(result);
    });
});
