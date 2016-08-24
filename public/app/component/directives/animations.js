angular.module('app')
  .directive('animation', function() {

    return {
      restrict: 'EA',
      link: function(scope, elem, attr) {
          $('.your_car button').on('click', function() {
            $('.your_car button').removeClass('outline')
            $(this).addClass('outline');
          });

          $('.select_performance div').on('click', function() {
            $('.select_performance div').removeClass('outline');
            $(this).addClass('outline');
          });

          $('.pick_a_color li').on('click', function() {
            var color = $(this).val();
            if($('.under_text h4').is(':visible')) {
              $('.under_text h4').hide();
              $('.pick_a_color li').removeClass('outline')
              $('.under_text h4:nth-child(' + color + ')').show();
              $('.pick_a_color li:nth-child(' + color + ')').addClass('outline');
            } else if ($('.under_text h4').is(':hidden')) {
              $('.under_text h4:nth-child(' + color + ')').show();
            }
          });

          $('.pick_your_style li').on('click', function() {
            var type = $(this).val();
            if($('.rims h4').is(':visible')) {
              $('.rims h4').hide();
              $('.pick_your_style li').removeClass('outline');
              $('.rims h4:nth-child(' + type + ')').show();
              $('.pick_your_style li:nth-child(' + type + ')').addClass('outline');
            } else if ($('.rims h4').is(':hidden')) {
              $('rims h4:nth-child(' + type + ')').show();
            }
          })

          $('.pick_roof_type li').on('click', function() {
            var roof = $(this).val();
            $('.roof h4').hide();
            $('.roof h4:nth-child(' + roof + ')').show();
            $('.pick_roof_type li').removeClass('outline');
            $('.pick_roof_type li:nth-child(' + roof + ')').addClass('outline');
          })

          $('.pick_headliner li').on('click', function() {
            var headliner = $(this).val();
            $('.headliner h4').hide();
            $('.headliner h4:nth-child(' + headliner + ')').show();
            $('.pick_headliner li').removeClass('outline');
            $('.pick_headliner li:nth-child(' + headliner + ')').addClass('outline');
          })

          $('.pick_decor li').on('click', function() {
            var decor = $(this).val();
            $('.decor h4').hide();
            $('.decor h4:nth-child(' + decor + ')').show();
            $('.pick_decor li').removeClass('outline');
            $('.pick_decor li:nth-child(' + decor + ')').addClass('outline');
          })

          $('.pick_seats li').on('click', function() {
            var seats = $(this).val();
            $('.seats h4').hide();
            $('.seats h4:nth-child(' + seats + ')').show();
            $('.pick_seats li').removeClass('outline');
            $('.pick_seats li:nth-child(' + seats + ')').addClass('outline');
          })

      }
    }
})
