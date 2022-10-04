const express = require('express');
const cors = require('cors');
// helps connect to mongo.db 
const mongoose = require('mongoose');

// Environment variables in .env file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Allows us to parse Json
app.use(cors());
app.use(express.json());

// database uri - get from ATLAS Dashboard
const uri = process.env.ATLAS_URI;
// use NewUrlParser - to deal with new updates
mongoose.connect(uri, { useNewUrlParser: true});


const connection = mongoose.connection;
// Onde connection is open, it will register in the log
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Requiring the files
const clubsRouter = require('./routes/clubs');
const usersRouter = require('./routes/users');
<<<<<<< HEAD
<<<<<<< HEAD
const postsRouter = require('./routes/posts')
=======
const postsRouter = require('./routes/posts');
const feedRouter = require('./routes/feed');
>>>>>>> CAT-38-US-1.2
=======
const postsRouter = require('./routes/posts')
>>>>>>> CAT-37-US-1.1

// When they go to /location, they will go to that router
app.use('/clubs', clubsRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.use('/feed', feedRouter);
>>>>>>> CAT-38-US-1.2
=======
>>>>>>> CAT-37-US-1.1

// Starts listening to a PORT
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});