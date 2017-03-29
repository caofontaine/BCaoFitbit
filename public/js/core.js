/*List of controller and service used for front end interaction.*/

var app = angular.module('BCaoFitbit', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/year/:year', {
      controller: 'YearController',
      templateUrl: 'views/year.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);