/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var allDataSchema = mongoose.Schema({
  Date: Date,
  CaloriesBurned: Number,
  NumSteps: Number,
  Distance: Number,
  Floors: Number,
  MinutesSedentary: Number,
  MinutesLightlyActive: Number,
  MinutesFairlyActive: Number,
  MinutesVeryActive: Number,
  ActivityCalories: Number
},
{collection: 'fitbitdata'});

var allData = mongoose.model('allData', allDataSchema); //Register model name with schema.

var fitbitSpecificSchema = mongoose.Schema({
  Date: Date,
  NumSteps: Number
},
{collection: 'fitbitdata'});

var fitbitSpecific = mongoose.model('fitbitSpecific', fitbitSpecificSchema);

module.exports = {
  allData: allData,
  fitbitSpecific: fitbitSpecific
};