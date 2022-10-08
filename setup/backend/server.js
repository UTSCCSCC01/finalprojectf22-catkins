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
const postsRouter = require('./routes/posts');
const feedRouter = require('./routes/feed');
const { db } = require('./models/post.model');

// When they go to /location, they will go to that router
app.use('/clubs', clubsRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/feed', feedRouter);


// Starts listening to a PORT
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.post('/clubs', (req, res) =>{
    db.collection('clubs').updateOne({_id: members}, {$push: {members: req.body}}).then(result=>{
        res.status(201).json(result)
    })
})