'use strict';
process.env.NODE_ENV = 'test';

var base = process.cwd();
var database = require(base + '/config/database.js'),
    mongoose = require('mongoose'),
    should = require('should');
var allData = require(base + '/app/controllers/allData.server.controller');

describe("Database Testing", function() {
  before(function(done) {
    mongoose.connect(database.testDB, function() {
      console.log('Connected to: ' + database.testDB);
      done(); //So nothing else can run until database connection is done.
    });
  });
  
  // Test getting all data. 
  describe("Get All Data", function() {
    it("should get an array containing all data", function(done) {

      allData.list.length.should.equal(3);
      done();
      
    });
  });
});