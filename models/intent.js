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
    intentFeedback: [intentFeedbackSchema]
    },{
    timestamps: true,
    toJSON: { virtuals: true }
  });
  


//   intentSchema.statics.newProfile = function(userId) {
//     // 'this' is bound to the model (don't use an arrow function)
//     // return the promise that resolves to a cart (the user's unpaid order)
//     return this.findOneAndUpdate(
//       // query
//       { user: userId, isPaid: false },
//       // update - in the case the order (cart) is upserted
//       { user: userId },
//       // upsert option creates the doc if it doesn't exist!
//       { upsert: true, new: true }
//     );
//   };


  module.exports = mongoose.model('Intent', intentSchema);