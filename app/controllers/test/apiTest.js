'use strict';
process.env.NODE_ENV = 'test';

var base = process.cwd();
var database = require(base + '/config/database.js'),
    mongoose = require('mongoose'),
    should = require('should'),
    testUtils = require(base + '/app/controllers/test/utils');
var allData = require(base + '/app/controllers/allData'),
    allSteps = require(base + '/app/controllers/allSteps'),
    yearSteps = require(base + '/app/controllers/yearSteps'),
    monthSteps = require(base + '/app/controllers/monthSteps');

describe("Database Testing", function() {
  before(function(done) {
    mongoose.connect(database.testDB, function() {
      console.log('Connected to: ' + database.testDB);
      done(); //So nothing else can run until database connection is done.
    });
  });
  
  // Test getting all data. 
  describe("Get All Data", function() {
    it("should return an array of length 3 for all data", function(done) {

      var req = {};

      var res = testUtils.responseValidator(200, function(data) {
        data.length.should.equal(3);
        done();
      });
      
      allData.getAllData(req, res);
      
    });
  });
  
  // Test getting specific data. 
  describe("Get Specific Data", function() {
    it("should return an array length of 3 with only date and step data", function(done) {
      
      var req = {};

      var res = testUtils.responseValidator(200, function(data) {
        data.length.should.equal(3);
        data[0].should.have.property('Date');
        data[0].should.have.property('NumSteps');
        done();
      });
      
      allSteps.getAllSteps(req, res);
      
    });
  });
  
  // Test getting data by year. 
  describe("Get Specific Data By Year", function() {
    it("should return an array with data from 2015", function(done) {
      
      var req = {params: {year: 2015}};

      var res = testUtils.responseValidator(200, function(data) {
        data.length.should.equal(1);
        data[0].should.have.property('Year');
        data[0].Year.should.equal(2015);
        done();
      });
      
      yearSteps.getYearSteps(req, res);
      
    });
  });
  
  // Test getting data by month in a year. 
  describe("Get Specific Data By Month In A Year", function() {
    it("should return an array with data from March 2017", function(done) {
      
      var req = {params: {year: 2017, month: 'mar'}};

      var res = testUtils.responseValidator(200, function(data) {
        data.length.should.equal(1);
        data[0].should.have.property('Year');
        data[0].Year.should.equal(2017);
        data[0].should.have.property('Month');
        data[0].Month.should.equal(3);
        done();
      });
      
      monthSteps.getMonthSteps(req, res);
      
    });
  });
  
  // Close database connection.
  after(function(done) {
    console.log("Testing complete. Disconnecting from " + database.testDB + ".");
    mongoose.disconnect(done);
  });
});