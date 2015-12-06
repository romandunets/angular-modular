angular.module('app')
  .directive('ngMenu', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'app/shared/menu.tpl.html'
    }
});
