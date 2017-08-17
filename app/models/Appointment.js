const mongoose = require('mongoose');
const CONSTANTS = require('../../config/constants');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema(
  {
    doctor_id: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    patient_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    appointment_date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    start_time: {
      type: Number,
      required: true,
    },
    end_time: {
      type: Number,
      required: true,
    },
    payment_status: {
      type: String,
      enum: [
        CONSTANTS.ENUM.PAYMENT_STATUS.INPROCESS,
        CONSTANTS.ENUM.PAYMENT_STATUS.PAID,
        CONSTANTS.ENUM.PAYMENT_STATUS.REFUNDED,
      ],
      default: CONSTANTS.ENUM.PAYMENT_STATUS.INPROCESS,
    },
    booking_status: {
      type: String,
      enum: [
        CONSTANTS.ENUM.BOOKING_STATUS.INPROCESS,
        CONSTANTS.ENUM.BOOKING_STATUS.APPROVED,
        CONSTANTS.ENUM.BOOKING_STATUS.CANCELLED,
      ],
      default: CONSTANTS.ENUM.BOOKING_STATUS.INPROCESS,
    },
    condition: {
      type: String,
      enum: [
        CONSTANTS.ENUM.CONDITION.NORMAL,
        CONSTANTS.ENUM.CONDITION.EMERGENCY,
      ],
      default: CONSTANTS.ENUM.CONDITION.NORMAL,
    },
    token: {
      type: String,
    },
    problem: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = appointmentSchema;
