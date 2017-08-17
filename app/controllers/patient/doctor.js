const express = require('express');
const doctorLib = require('../../../lib/patient/doctor');
const router = express.Router();

function getAllDoctors(req, res, next) {
  const searchObj = req.body;
  doctorLib.getDoctors(searchObj, function(err, result) {
    if (err) {
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
    }
    //res.json(result);
    res.render('show_doctor', {doc:result});
  });
}

function getDoctorSlots(req, res, next) {
  const day = req.body.day;
  const date = req.body.date;
  const doctorId = req.params.doctorId;
  console.log(day+" "+date);
  doctorLib.getAllslots(doctorId, date, day, function(err, result) {
    if (err) {
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
    }
    //res.json(result);
    res.render('show_doctor', {doc:result});
  });
}

router.post('/slot/:doctorId', getDoctorSlots);
router.post('/', getAllDoctors);
module.exports = router;
