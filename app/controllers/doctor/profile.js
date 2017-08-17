const express = require('express');
const profileLib = require('../../../lib/doctor/profile');
const uploadHelper = require('../../helper/upload');
const router = express.Router();
let upload = uploadHelper.certificateUpload();

function createProfile(req, res, next) {
  console.log(req.session);
  const user = req.session.userId;
  const image = req.file.filename;
  console.log(image);
  const path = '/image/certificate/uploads/' + image;
  console.log('Path :--' + path);
  const profileObj = req.body;
  profileObj.certi = path;
  console.log('RR  ' + JSON.stringify(profileObj));
  profileLib.createDoctorProfile(user, profileObj, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
    res.render('profileundercheck');
  });
}

router.post('/', upload.single('image'), createProfile);
module.exports = router;
