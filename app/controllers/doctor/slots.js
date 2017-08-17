const express = require('express');
const slotLib = require('../../../lib/doctor/slots');
const converter = require('../../helper/timeConverter');
const router = express.Router();

function createNewSlot(req, res, next) {
  const user = req.session.userId;
  const slotObj = req.body;
  slotLib.createNewSlot(user, slotObj, function(err, result) {
    if (err) {
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
    }
    res.render('dashboard');
  });
}

function getSlotPage(req, res, next) {
  res.render('add-slot');
}

function daySlots(req, res, next) {
  const user = req.session.userId;
  const day = req.params.day;
  slotLib.getAllSlotsOfDay(user, day, function(err, result) {
    if (err) {
      res.render('500', {
        type: err.type,
        msg: err.msg,
        errorDetail: err.errorDetail,
      });
    }
    converter.convert(result, function(err, newResult) {
      //res.json(newResult);
          res.render('slot-list', {slot:newResult});
    });
  });
}

function view_slots(req,res,next){
  res.render('view_slot');
}
router.get('/view',view_slots);
router.get('/', getSlotPage);
router.get('/day/:day', daySlots);
router.post('/', createNewSlot);
module.exports = router;
