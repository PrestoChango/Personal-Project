angular.module('app')
  .directive('infoPane', function() {

      return {
        restrict: 'E',
        templateUrl: 'app/component/directives/templates/infoPane.html',
        link: function(scope, element, attr) {

        element.on('click', function(e) {

          if (angular.element(e.target).hasClass('close')) {
            jQuery('.info-pane').hide();
          }


          })


        }
      }
})
