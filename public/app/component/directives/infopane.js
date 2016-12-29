angular.module('app')
  .directive('infoPane', function() {

      return {
        restrict: 'E',
        templateUrl: 'app/component/directives/templates/infoPane.html',
        link: (scope, element, attr) => {

        element.on('click', e => {

          if (angular.element(e.target).hasClass('close')) {
            $('.info-pane').hide();
          }


          })


        }
      }
})
