const mongoose = require('mongoose');
const addressSchema = require('./Address');
const CONSTANTS = require('../../config/constants');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mob_no: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: [CONSTANTS.ENUM.GENDER.MALE, CONSTANTS.ENUM.GENDER.FEMALE],
      default: CONSTANTS.ENUM.GENDER.MALE,
    },
    role: {
      type: String,
      enum: [
        CONSTANTS.ENUM.ROLE.ADMIN,
        CONSTANTS.ENUM.ROLE.DOCTOR,
        CONSTANTS.ENUM.ROLE.PATIENT,
      ],
      default: CONSTANTS.ENUM.ROLE.PATIENT,
    },
    emitra: {
      type: String,
    },
    address: addressSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
