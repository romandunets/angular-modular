// Use this file to setup application module and load its dependencies
// Optinally the following files can be created and added as dependencies: 'app.routes', 'app.core', 'app.services', 'app.config'
angular.module('app', ['ngRoute', 'app.home', 'app.users'])

// Setup default route
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo:'/home'
  });
}]);
