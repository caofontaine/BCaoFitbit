'use strict';
process.env.NODE_ENV = 'test';

var base = process.cwd();
var database = require(base + '/config/database.js'),
    mongoose = require('mongoose'),
    should = require('should'),
    testUtils = require(base + '/test/utils');
var allData = require(base + '/app/controllers/allData'),
    steps = require(base + '/app/controllers/steps');

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
        data[0].should.have.property('Steps');
        done();
      });
      
      steps.getSteps(req, res);
      
    });
  });
  
  // Close database connection.
  after(function(done) {
    console.log("Testing complete. Disconnecting from " + database.testDB + ".");
    mongoose.disconnect(done);
  });
});