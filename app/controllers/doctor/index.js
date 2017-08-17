const express = require('express');
const profileRoutes = require('./profile');
const slotRoutes = require('./slots');
const CONSTANTS = require('../../../config/constants');
const router = express.Router();

function authenticator(req, res, next) {
  if (
    req.session &&
    req.session.userId &&
    req.session.role === CONSTANTS.ENUM.ROLE.DOCTOR
  ) {
    res.set(
      'Cache-Control',
      'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
    );
    next();
  } else {
    res.status(403).json({ info: 'Unauthorized' });
  }
}

router.use(authenticator);
router.use('/profile', profileRoutes);
router.use('/slot', slotRoutes);
module.exports = router;
