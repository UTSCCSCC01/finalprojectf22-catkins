const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

// Login request
router.post('/login', async (req, res) => {
    const {username, password} = req.body || req.query;

    // Use to enable/disable bcrypting password
    const bcrypting = false;

    if (!username || !password) {
        res.status(400).json('Missing username or password');
    }

    const user = await User.findOne({username: username});
    if (!user) {
        return res.status(400).json('No user');
    }

    // Optional bcrypt password matching
    if (bcrypting) {
        const matchPassword = await bcrypt.compare(password, user.password);
        if (matchPassword) {
            const userSession = {username: user.username};
            req.session.user = userSession;
            return res.status(200).json({message: 'Logged in', userSession});
        } else {
            return res.status(400).json('Invalid login');
        }
    } else {
        const matchPassword = (password === user.password);
        if (matchPassword) {
            const userSession = {username: user.username};
            req.session.user = userSession;
            return res.status(200).json({message: 'Logged in', userSession});
        } else {
            return res.status(400).json('Invalid login');
        }
    }
    

});

// Registration (does the same thing as users/add but updated a bit)
router.post('/register', async (req, res) => {

    // Request username to be added
    const username = req.body.username || req.query.username;
    // Request password to be added
    const password = req.body.password || req.query.password;
    // Request role to be added (student by default)
    const role = req.body.role || req.query.role || 'student';
    // The users following is initially set to empty
    const following = []

    // Create new User
    const newUser = new User({username, password, role, following});

    // mongoose method to save user to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

// Authenticating the session
router.get('/auth', async (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user);
    } else {
        return res.status(401).json('Unauthorized');
    }
});

module.exports = router;