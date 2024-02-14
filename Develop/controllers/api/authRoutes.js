const express = require('express');
const router = express.Router();
const User  = require('../../models/user');
console.log(User);
const bcrypt = require('bcryptjs');

// Sign up route
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); // If already logged in, redirect to the home page
    } else {
      res.render('signup'); // Render the signup page if not logged in
    }
  });

  router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.loggedIn = true;
        res.redirect('/'); // Redirect to the home page after signing up
      });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error signing up', error: err.message });
      }
  });

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); // If already logged in, redirect to the homepage
    } else {
      res.render('login'); // Render the login view if not logged in
    }
  });

  router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const validPassword = await user.checkPassword(req.body.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json({ user: user.username, message: 'You are now logged in!' });
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Logout route
router.post('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('Unable to log out');
      } else {
        res.send('Logout successful');
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
