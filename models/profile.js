const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6
const bcrypt = require('bcrypt')

const profileSchema = new Schema({
    profileUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profileName: { 
        type: String, 
        default: false 
    }, 
    profileInformation: { 
        type: String, 
        default: false 
    }, 
    intents: [{
        type: Schema.Types.ObjectId,
        ref: 'Intent',
        required: true
    }],
    timestamps: true,
    toJSON: { virtuals: true }
  });
  
  module.exports = mongoose.model('Profile', profileSchema);