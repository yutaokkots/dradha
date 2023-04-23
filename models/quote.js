const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
    quote:{
        type: String,
        required: true
    },
    source: {
        type: String,
        required: false
    },
    },{
    timestamps: true,
    toJSON: { virtuals: true }
});
  

  module.exports = mongoose.model('Quote', quotesSchema);