angular.module('app')
  .directive('fixedHeader', function() {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/fixed_header.html'
  }
})
