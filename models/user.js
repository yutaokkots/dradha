const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6
// SALT_ROUNDS variable determines how much processing time it will take to perform the hash. 
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
      type: String, 
      required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }}, {
        timestamps: true,
        toJSON: {
            transform: function(doc, ret) {
              delete ret.password;
              return ret;
            }
        }
    }
);

// if the user creates or changes the password, use bcrypt.hash
// bcrypt library from npm
// salt-rounds 
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

//notes:  Although technically not a validator, unique: true creates a unique index in the database which will trigger an error if violated.
//trim: This transform causes Mongoose to trim spaces before and after the string before saving.
//lowercase: This transform causes Mongoose to convert the string to lowercase before saving.
// do not add properties used to embed related data or reference 1:M / M:M relationships

module.exports = mongoose.model('User', userSchema);