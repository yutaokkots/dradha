const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6
const bcrypt = require('bcrypt')


const intentFeedbackSchema = new Schema({
    commentUser: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
      required: false
    },
    comment: { 
        type: text, 
        required: false
    }, 
        toJSON: { virtuals: true }
});

const intentLikesSchema = new Schema({
  commentUser: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: false
  },
  likes: { 
      type: Number, 
      default: 1 },
  }, {
      toJSON: { virtuals: true }
});

const intentSchema = new Schema({
    intentUser: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    intentName: {
        type: String,
        required: true
    }, 
    intentDescription: {
        type: String,
        required: true
    },
    intentComplete: { 
        type: Boolean, 
        default: false 
    },
    intentLikes: [intentLikesSchema],
    intentFeedback: [intentFeedbackSchema],
    timestamps: true,
    toJSON: { virtuals: true }
  });
  

  module.exports = mongoose.model('Intent', intentSchema);