// Use this file to setup application submodule and load its dependencies
// Optinally the following files can be created and added as dependencies: 'app.home.routes', 'app.home.core', 'app.home.services', 'app.home.config'
angular.module('app.home', ['app.home.controller'])

// Setup routes
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/components/home/home.tpl.html',
    controller: 'HomeController as home'
  });
}]);
