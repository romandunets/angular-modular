angular.module('app')
  .directive('ngMenu', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/shared/menu.tpl.html'
    }
});
