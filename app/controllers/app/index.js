const express = require('express');
const registerLib = require('../../../lib/app/register');
const loginLib = require('../../../lib/app/login');

const router = express.Router();

function registerUser(req, res, next) {
  const userObj = req.body;
  registerLib.addUser(userObj, function(err, result) {
    if (err) {
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
      return;
    }
    res.redirect('/');
  });
}

function loginUser(req, res, next) {
  const userObj = req.body;
  loginLib.userLogin(userObj, function(err, result) {
    if (err) {
      console.log(err);
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
      return;
    }
    req.session.userId = result.user._id;
    req.session.role = result.user.role;
    req.session.stage = result.stage;
    if (!result.stage) {
      //res.json({mssg:"login"});
      res.render('patient_dash', { user: result.user });
    } else if (result.stage === 'notCreated') {
      res.render('doctorstage1');
    } else if (result.stage === 'cancelled') {
      res.render('profile_cancel');
    } else if (result.stage === 'in_process') {
      res.render('profileundercheck');
    } else {
      // res
      //   .status(200)
      //   .json({ success: true, message: 'User Successfully Login' });
      res.render('dashboard');
    }
  });
}

function logoutUser(req, res) {
  req.session.destroy();
  res.redirect('/');
}

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
module.exports = router;
