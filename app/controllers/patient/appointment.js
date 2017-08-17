const express = require('express');
const appointmentLib = require('../../../lib/patient/appointment');
const router = express.Router();

function makeNewAppointment(req, res, next) {
  const doctorId = req.params.doctorId;
  const userId = req.session.userId;
  const appointObj = req.body;

  appointmentLib.createNewAppointment(doctorId, userId, appointObj, function(
    err,
    result
  ) {
    if (err) {
      res.json(err);
    }
    res.json(result);
  });
}

router.post('/:doctorId', makeNewAppointment);
module.exports = router;
