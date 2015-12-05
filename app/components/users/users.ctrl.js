// Define module for home controller
angular.module('app.users.controller', [])

// Define home controller
.controller('UsersController', ['$scope', 'users', function UsersController($scope, users) {
  $scope.users = users;
}]);
