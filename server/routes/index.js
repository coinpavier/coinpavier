const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));


// About us
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));

// INVESTMENTS STRATEGY
router.get('/strategy', forwardAuthenticated, (req, res) => res.render('strategy'));

// FAQ

router.get('/help', forwardAuthenticated, (req, res) => res.render('faq'));

// TERMS
router.get('/term-and-condition', forwardAuthenticated, (req, res) => res.render('terms'));

//PRIVACY POLICY
router.get('/privacy-policy', forwardAuthenticated, (req, res) => res.render('privacy'));

//REFUND POLICY
router.get('/refund-policy', forwardAuthenticated, (req, res) => res.render('refund'));


router.get('/how-to-buy-bitcoin', forwardAuthenticated, (req, res) => res.render('how'));

router.get('/what-is-bitcoin', forwardAuthenticated, (req, res) => res.render('bitcoin'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);

router.get('/return-on-investments', ensureAuthenticated, (req, res) =>
  res.render('returns', {
    user: req.user
  })
);
router.get('/history', ensureAuthenticated, (req, res) =>
  res.render('history', {
    user: req.user
  })
);
router.get('/invest', ensureAuthenticated, (req, res) =>
  res.render('invest', {
    user: req.user
  })
);

router.get('/withdrawal', ensureAuthenticated, (req, res) =>
  res.render('withdrawal', {
    user: req.user
  })
);
router.get('/withdrawal-charge', ensureAuthenticated, (req, res) =>
  res.render('charge', {
    user: req.user
  })
);
router.get('/withdrawal-success', ensureAuthenticated, (req, res) =>
  res.render('success', {
    user: req.user
  })
);
router.get('/analytics', ensureAuthenticated, (req, res) =>
  res.render('analytics', {
    user: req.user
  })
);

router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);
router.get('/checkout', ensureAuthenticated, (req, res) =>
  res.render('checkout', {
    user: req.user
  })
);
router.get('/deposit-success', ensureAuthenticated, (req, res) =>
  res.render('deposit', {
    user: req.user
  })
);
router.get('/bloop', ensureAuthenticated, (req, res) =>
  res.render('complete', {
    user: req.user
  })
);


module.exports = router;
