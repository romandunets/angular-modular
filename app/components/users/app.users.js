// Use this file to setup user module and load its dependencies
// Optinally the following files can be created and added as dependencies: 'app.users.routes', 'app.users.core', 'app.users.services', 'app.users.config'
angular.module('app.users', ['app.users.controller', 'app.users.service'])

// Setup users routes
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: 'app/components/users/users.list.tpl.html',
    controller: 'UsersController as usersCtrl',
    resolve:{
      users: ['Users', function (Users) {
        return Users.query();
      }]
    }
  })
  .when('/users/:userId', {
    templateUrl: 'app/components/users/users.show.tpl.html',
    controller: 'UserController as userCtrl',
    resolve:{
      user: ['Users', '$route', function (Users, $route) {
        return Users.get({id: $route.current.params.userId});
      }]
    }
  });
}]);
