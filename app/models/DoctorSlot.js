const mongoose = require('mongoose');
const CONSTANTS = require('../../config/constants');
const Schema = mongoose.Schema;
const doctorSlotSchema = new Schema(
  {
    doctor_id: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    day: {
      type: String,
      enum: [
        CONSTANTS.ENUM.DAY.MONDAY,
        CONSTANTS.ENUM.DAY.TUESDAY,
        CONSTANTS.ENUM.DAY.WEDNESDAY,
        CONSTANTS.ENUM.DAY.THURSDAY,
        CONSTANTS.ENUM.DAY.FRIDAY,
        CONSTANTS.ENUM.DAY.SATURDAY,
        CONSTANTS.ENUM.DAY.SUNDAY,
      ],
      default: CONSTANTS.ENUM.DAY.MONDAY,
    },
    start_time: {
      type: Number,
      required: true,
    },
    end_time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = doctorSlotSchema;
