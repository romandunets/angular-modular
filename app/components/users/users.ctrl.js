// Define module for users controllers
angular.module('app.users.controller', [])

// Define users controller
.controller('UsersController', ['$scope', 'users', function UsersController($scope, users) {
  $scope.users = users;
}])

// Define user controller
.controller('UserController', ['$scope', 'user', function UserController($scope, user) {
  $scope.user = user;
}]);
