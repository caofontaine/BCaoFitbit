/*List of controller and service used for front end interaction.*/

var app = angular.module('BCaoFitbit', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/:year', {
      controller: 'YearController',
      templateUrl: 'views/year.html'
    })
    .when('/:year/:month', {
      controller: 'MonthController',
      templateUrl: 'views/month.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);