const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6
const bcrypt = require('bcrypt')

const sessionDetailSchema = new Schema({
    session: { 
        type: Array,
        default: [0]
    }, 
    time: {
        time: Number,
        default: 0
    },
    toJSON: { virtuals: true }
  });

const sessionSchema = new Schema({
    sessionUser: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    sessionDate: {
        type: Date,
        required: false
    },
    programSequence: [sessionDetailSchema],
    timestamps: true,
    toJSON: { virtuals: true }
  });
  

  module.exports = mongoose.model('Session', sessionSchema);