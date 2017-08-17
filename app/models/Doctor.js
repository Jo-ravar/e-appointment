const mongoose = require('mongoose');
const CONSTANTS = require('../../config/constants');
const Schema = mongoose.Schema;
const doctorSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    specialization: [
      {
        type: String,
      },
    ],
    verification_stage: {
      type: String,
      enum: [
        CONSTANTS.ENUM.VERIFICATION.INPROCESS,
        CONSTANTS.ENUM.VERIFICATION.APPROVED,
        CONSTANTS.ENUM.VERIFICATION.CANCELLED,
      ],
      default: CONSTANTS.ENUM.VERIFICATION.INPROCESS,
    },
    certificate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = doctorSchema;
