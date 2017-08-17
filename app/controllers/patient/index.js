const express = require('express');
const doctorRoutes = require('./doctor');
const appointRoutes = require('./appointment');
const CONSTANTS = require('../../../config/constants');
const router = express.Router();

function authenticator(req, res, next) {
  if (
    req.session &&
    req.session.userId &&
    req.session.role === CONSTANTS.ENUM.ROLE.PATIENT
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
router.use('/doctors', doctorRoutes);
router.use('/appointment', appointRoutes);
module.exports = router;
