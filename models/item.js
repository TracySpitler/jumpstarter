// Movie Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({

    testing: {
      type: String,
      required: false,
      default: "https://screenrant.com/wp-content/uploads/2017/12/Deadpool-2-Cable-banner.jpg"
    },
    created_at: {
      type: Date,
      required: false
    },
    updated_at: {
      type: Date,
      required: false
    },
});

ItemSchema.pre('save', function(next) {
  // create new date
  var currentDate = new Date();
  // set the updated date to right now
  this.updated_at = currentDate;
  // if their is no created date set it to now
  if(!this.created_at) {
    this.created_at = currentDate;
  }
  // save the model to the database
  next();
})

module.exports = Item = mongoose.model('item', ItemSchema, 'items');
