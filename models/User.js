const { Schema } = require('mongoose');

exports.UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, 'Name must be least 3 character.'],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        const mailSymbolCheck = /@/.test(v);
        const lengthCheck = v.length > 3;

        return mailSymbolCheck && lengthCheck;
      },
      message: ({ value }) => `${value} is not a valid e-mail address!`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [8, 'Password must be least 8 character.'],
  },
  gender: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default: '',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
