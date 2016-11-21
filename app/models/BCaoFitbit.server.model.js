/*Defines schema for the data being created or called for/from the database.*/

var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var allData = mongoose.Schema({
  Date: String,
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

var fitbitSpecific = mongoose.Schema({
  Date: String,
  NumSteps: Number
},
{collection: 'fitbitdata'});

mongoose.model('allData', allData); //Register model name with schema.
mongoose.model('fitbitSpecific', fitbitSpecific);