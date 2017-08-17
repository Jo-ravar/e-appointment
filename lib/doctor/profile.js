const Models = require('../../app/models');
const async = require('async');
const CONSTANTS = require('../../config/constants');
const mongoose = require('mongoose');
const ERROR_TYPES = CONSTANTS.ERROR_TYPES;

function createDoctorProfile(userId, profileObj, callback) {
  if (!profileObj) {
    callback({
      type: ERROR_TYPES.INCORRECT_PAYLOAD,
      msg: 'No doctor details found',
      errorDetail: 'Need to pass profile object for creation of doctor profile',
    });
    return;
  }
  console.log(profileObj);
  const newDoctor = new Models.Doctor({
    user_id: userId,
    fees: profileObj.fees,
    certificate: profileObj.certi,
    specialization: profileObj.specialization,
    verification_stage: CONSTANTS.ENUM.VERIFICATION.INPROCESS,
  });
  newDoctor.save(function(errorInSave, savedDoctor) {
    if (errorInSave) {
      callback({
        type: ERROR_TYPES.DB_ERROR,
        msg: 'Failed to Create a new doctor.',
        errorDetail: String(errorInSave),
      });
      return;
    }
    callback(null, savedDoctor);
  });
}

module.exports = {
  createDoctorProfile: createDoctorProfile,
};
