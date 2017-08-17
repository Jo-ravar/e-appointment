module.exports = {
  DB: {
    DB_URL: 'mongodb://localhost:27017/doctor',
  },
  ERROR_TYPES: {
    DB_ERROR: 'db_error',
    INVALID_RECORD: 'invalid_record',
    INCORRECT_PAYLOAD: 'incorrect_payload',
    TYPE_ERROR: 'type_error',
    ITERATION_ERROR: 'iteration_error',
    VALIDATION_ERROR: 'validation_error',
    AUTHENTICATION_ERROR: 'authentication_error',
    AUTH0_ERROR: 'auth0_error',
    JWT_ERROR: 'jwt_error',
    SEND_MAIL_ERROR: 'send_mail_error',
  },
  ENUM: {
    GENDER: {
      MALE: 'male',
      FEMALE: 'female',
    },
    ROLE: {
      ADMIN: 'admin',
      DOCTOR: 'doctor',
      PATIENT: 'patient',
    },
    DAY: {
      MONDAY: 'monday',
      TUESDAY: 'tuesday',
      WEDNESDAY: 'wednesday',
      THURSDAY: 'thursday',
      FRIDAY: 'friday',
      SATURDAY: 'saturday',
      SUNDAY: 'sunday',
    },
    VERIFICATION: {
      INPROCESS: 'in_process',
      APPROVED: 'approved',
      CANCELLED: 'cancelled',
    },
    PAYMENT_STATUS: {
      INPROCESS: 'in_process',
      PAID: 'paid',
      REFUNDED: 'refunded',
    },
    BOOKING_STATUS: {
      INPROCESS: 'in_process',
      APPROVED: 'approved',
      CANCELLED: 'cancelled',
    },
    CONDITION: {
      NORMAL: 'normal',
      EMERGENCY: 'emergency',
    },
  },
};