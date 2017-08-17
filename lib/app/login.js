const Models = require('../../app/models');
const async = require('async');
const CONSTANTS = require('../../config/constants');
const mongoose = require('mongoose');
const ERROR_TYPES = CONSTANTS.ERROR_TYPES;
function _checkVerificationStageDoctor(doctorId, callback) {
  Models.Doctor
    .findOne({
      user_id: doctorId,
    })
    .exec(function(fetchDoctorError, fetchedDoctor) {
      if (fetchDoctorError) {
        callback({
          type: ERROR_TYPES.DB_ERROR,
          msg: 'Failed to find doctor',
          errorDetail: String(err),
        });
      } else if (!fetchedDoctor) {
        const obj = {
          stage: 'notCreated',
        };
        callback(null, obj);
      } else {
        const obj = {
          stage: fetchedDoctor.verification_stage,
        };
        callback(null, obj);
      }
    });
}

function _checkUserAndPswd(userObj, callback) {
  Models.User
    .findOne({
      email: userObj.email,
      password: userObj.pwd,
    })
    .exec(function(err, loggedIn) {
      if (err) {
        callback({
          type: ERROR_TYPES.DB_ERROR,
          msg: 'Failed to login',
          errorDetail: String(err),
        });
      } else if (!loggedIn) {
        callback({
          type: ERROR_TYPES.INVALID_RECORD,
          msg: 'No such user exist',
          errorDetail: 'Email and password did not match',
        });
      } else {
        callback(null, loggedIn);
      }
    });
}

function userLogin(userObj, callback) {
  if (!userObj.email || !userObj.pwd) {
    callback({
      type: ERROR_TYPES.INCORRECT_PAYLOAD,
      msg: 'email and password is required for login',
      errorDetail: 'Either email or password is not passed',
    });
    return;
  }
  async.waterfall(
    [
      function(waterfallCallback) {
        _checkUserAndPswd(userObj, function(userError, user) {
          waterfallCallback(userError, user);
        });
      },
      function(user, waterfallCallback) {
        if (user.role === CONSTANTS.ENUM.ROLE.DOCTOR) {
          _checkVerificationStageDoctor(user._id, function(stageError, stage) {
            const obj = {
              user: user,
              stage: stage.stage,
              role: user.role,
            };
            waterfallCallback(stageError, obj);
          });
        } else {
          const obj = {
            user: user,
            role: user.role,
          };
          waterfallCallback(null, obj);
        }
      },
    ],
    function(err, data) {
      callback(err, data);
    }
  );
}
module.exports = {
  userLogin: userLogin,
};
