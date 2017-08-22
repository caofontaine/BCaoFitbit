/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose'),
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

var stepsSchema = mongoose.Schema({
  Date: Date,
  NumSteps: Number
},
{collection: 'fitbitdata'});

var steps = mongoose.model('steps', stepsSchema);

module.exports = {
  allData: allData,
  steps: steps
};