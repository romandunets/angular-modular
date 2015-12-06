// Define module for users factory
angular.module('app.users.service', ['ngResource'])

// Define users factory
.factory('Users', ['$resource', function ($resource) {
  return $resource('temp/users/:id.json');
}]);
