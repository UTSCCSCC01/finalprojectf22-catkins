const express = require("express");
const router = require("express").Router();
const cors = require("cors");
// helps connect to mongo.db
const mongoose = require("mongoose");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
// Environment variables in .env file
require("dotenv").config();

// Create express server
const app = express();
const port = process.env.PORT || 3000;

app.use(
  sessions({
    secret: "no secret at all",
    cookie: { expires: new Date(253402300000000) },
    saveUninitialized: false,
  })
);

// Allows us to parse Json
app.use(cors());
app.use(express.json());
// cookie parser
app.use(cookieParser());
//style sheets
app.use(express.static(path.resolve("..//src")));
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

const User = require("./models/user.model");

//session
var session;

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

app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) {
    res.redirect("/clubs");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", function (req, res) {
  res.sendFile(path.resolve("../src/login.html"));
});

app.post("/login", (req, res) => {
  // const username = req.body.Username;
  // const password = req.body.Password;
  // const user = User.findOne({
  //   $and: [{ username: username }, { password: password }],
  // });
  // console.log(user);
  // if (user === null) {
  //   res.sendFile(path.resolve("../src/login.html"));
  // } else {
  //   res.redirect("/clubs");
  // }
  res.redirect("/clubs");
});

app.get("/create", (req, res) => {
  res.redirect("login");
});
app.post("/create", (req, res) => {
  // Request username to be added
  const username = req.body.username;
  // Request password to be added
  const password = req.body.password;
  // Request role to be added
  const role = req.body.role;
  // The users following is initially set to empty
  const following = [];

  // Create new User
  const newUser = new User({ username, password, role, following });

  // mongoose method to save user to database
  newUser
    .save()
    .then(() => res.redirect("/login"))
    .catch((err) => res.status(400).json("Error: " + err));
});
