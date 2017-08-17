const Models = require('../../app/models');
const CONSTANTS = require('../../config/constants');
const mongoose = require('mongoose');
const ERROR_TYPES = CONSTANTS.ERROR_TYPES;

function addUser(userObj, callback) {
  if (!userObj) {
    callback({
      type: ERROR_TYPES.INCORRECT_PAYLOAD,
      msg: 'No user is passed.',
      errorDetail: 'A user is required for registeration.',
    });
    return;
  }
  const newUser = new Models.User({
    name: userObj.name,
    password: userObj.pwd,
    mob_no: userObj.phone,
    email: userObj.email,
    gender: userObj.gender,
    role: userObj.role,
    emitra: userObj.emitraId,
  });
  if (userObj.address && userObj.pin && userObj.city) {
    const addressObj = {
      address: userObj.address,
      city: userObj.city,
      pin: userObj.pin,
    };
    newUser.address = addressObj;
  }
  newUser.save(function(errorInSave, savedUser) {
    if (errorInSave) {
      callback({
        type: ERROR_TYPES.DB_ERROR,
        msg: 'Failed to Create a new user.',
        errorDetail: String(errorInSave),
      });
      return;
    }
    callback(null, savedUser);
  });
}

module.exports = {
  addUser: addUser,
};
