angular.module('app')
  .directive('animation', function() {

    return {
      restrict: 'EA',
      link: function(scope, elem, attr) {



          $('.your_car button').on('click', function() {
            $('.your_car button').removeClass('outline')
            $(this).addClass('outline');
          });


      }
    }
})
