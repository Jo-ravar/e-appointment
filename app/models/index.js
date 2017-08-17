const mongoose = require('mongoose');
const userSchema = require('./Users');
const doctorSlotSchema = require('./DoctorSlot');
const doctorSchema = require('./Doctor');
const appointmentSchema = require('./Appointment');

module.exports = {
  User: mongoose.model('User', userSchema),
  Doctorslot: mongoose.model('Doctorslot', doctorSlotSchema),
  Doctor: mongoose.model('Doctor', doctorSchema),
  Appointment: mongoose.model('Appointment', appointmentSchema),
};
