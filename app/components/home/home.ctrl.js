// Define module for home controller
angular.module('app.home.controller', [])

// Define home controller
.controller('HomeController', ['$scope', function HomeController($scope) {
  $scope.greeting = "Welcome to an AngularJS application structure";
}]);
