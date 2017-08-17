const express = require('express');
//const adminRoutes = require('./admin');
const appRoutes = require('./app');
const doctorRoutes = require('./doctor');
const patientRoutes = require('./patient');

const router = express.Router();

//router.use('/admin', adminRoutes);
router.use('/app', appRoutes);
router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);

module.exports = router;
