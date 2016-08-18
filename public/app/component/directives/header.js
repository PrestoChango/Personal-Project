angular.module('app')
  .directive('broadHeader', function() {

    return {
      restrict: 'E',
      templateUrl: 'app/component/directives/templates/header.html'
    }
  })
