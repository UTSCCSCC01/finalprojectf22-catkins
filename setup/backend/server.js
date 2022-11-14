// Environment variables in .env file
require('dotenv').config();

// Session stuff
const session = require('express-session');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Store sessions in mongo
const MongoDBStore = require('connect-mongodb-session')(session)
const loginRouter = require('./routes/login');

// Create express server
const app = express();
const MAX_AGE = 1000 * 60 * 60 * 24 * 60 // 2 months
const port = process.env.PORT || 5000;

// database uri - get from ATLAS Dashboard
const uri = process.env.ATLAS_URI;

// use NewUrlParser - to deal with new updates
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;

// connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
    uri: uri,
    collection: 'mySessions',
});

// Session
app.use(session({
    secret: 'a9rf6ga9vd',
    name: 'session-id', // cookies name put in "key" field in postman
    store: mongoDBstore,
    cookie: {maxAge: MAX_AGE, sameSite: false, secure: false,},
    resave: true,
    saveUninitialized: false,
}));

// Allows us to parse Json
app.use(cors());
app.use(express.json());

// Onde connection is open, it will register in the log
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Requiring the files
const clubsRouter = require('./routes/clubs');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const feedRouter = require('./routes/feed');
const searchRouter = require('./routes/search');
const { db } = require('./models/post.model');

// When they go to /location, they will go to that router
app.use('/clubs', clubsRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/feed', feedRouter);
app.use('/search', searchRouter);
app.use('/api', loginRouter);


// Starts listening to a PORT
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.post('/clubs', (req, res) =>{
    db.collection('clubs').updateOne({_id: members}, {$push: {members: req.body}}).then(result=>{
        res.status(201).json(result)
    })
})