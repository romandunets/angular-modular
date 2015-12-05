// Define module for users service
angular.module('app.users.service', ['ngResource'])

// Define User factory
.factory('Users', ['$resource', function ($resource) {
  return $resource('temp/users/:userId.json');
}]);
