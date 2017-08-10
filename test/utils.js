/*
  Code courtesy of MEAN Stack tutorial by Mifta Sintaha.
*/

var responseValidator = function(expectedStatusCode, validationFunction) {
  return {
    // Allows us to make assertions in testing on the data that is passed from res.json().
    json: function(statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
      // Sends data back via validationFunction so assertions can be made on the data.
      validationFunction(data);
    },
    // This is for the case of making assertions on error codes if somehow we cannot get the data from the server.
    send: function(statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
      // We are returning the error as an object.
      validationFunction(data);
    }
  }
};

module.exports = {
  responseValidator
};