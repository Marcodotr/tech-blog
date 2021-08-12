const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth'); //redirect to login if not logged in

router.get('/', withAuth, async (req, res) => {
  //router.get('/', withAuth, async (req, res) => {
  res.render('homescreen', {
    loggedIn: req.session.loggedIn,
    thisUser: req.session.thisUser
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    thisUser: req.session.thisUser
  });
});


module.exports = router;
