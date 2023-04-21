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
        type: String, 
        required: false
    }},{
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
      default: 0},
  }, {
      toJSON: { virtuals: true }
});

const intentSchema = new Schema({
    intentUserId:{
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
    intentPublic: { 
      type: Boolean, 
      default: false 
    },
    intentLikes: [intentLikesSchema],
    intentFeedback: [intentFeedbackSchema]
    },{
    timestamps: true,
    toJSON: { virtuals: true }
  });
  

  module.exports = mongoose.model('Intent', intentSchema);