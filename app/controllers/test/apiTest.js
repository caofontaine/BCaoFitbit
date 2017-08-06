'use strict';
process.env.NODE_ENV = 'test';

var base = process.cwd();
var database = require(base + '/config/database.js'),
    mongoose = require('mongoose'),
    should = require('should');

describe("Database Testing", function() {
  before(function(done) {
    mongoose.connect(database.testDB, function() {
      console.log('Connected to: ' + database.testDB);
      done(); //So nothing else can run until database connection is done.
    });
  });
});