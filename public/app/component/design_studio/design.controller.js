angular.module('app')
  .controller('designCtrl', function($scope, designSrvc) {

    $scope.cover = {
      img: './assets/img/design-shop/paint/solidwhite.png'
    }

    $scope.roof = {
      img: './assets/img/design-shop/exterior/sunroof.png'
    }

    $scope.tires = {
      img: './assets/img/design-shop/exterior/slipstream19.png'
    }

    $scope.paint = function(color) {
      designSrvc.updateBody(color).then(function(response) {
        $scope.cover.img = response[0].url;
        if($('.under_text h4').is(':visible')) {
          jQuery('.under_text h4').hide();
          jQuery('.pick_a_color li').removeClass('outline')
          jQuery('.under_text h4:nth-child(' + color + ')').show();
          jQuery('.pick_a_color li:nth-child(' + color + ')').addClass('outline');
        } else if ($('.under_text h4').is(':hidden')) {
          jQuery('.under_text h4:nth-child(' + color + ')').show();
        }

      })
    }

    $scope.changeWheel = function(type) {
      designSrvc.changeWheel(type).then(function(response) {
        $scope.tires.img = response[0].url;
        if($('.rims h4').is(':visible')) {
          jQuery('.rims h4').hide();
          jQuery('.pick_your_style li').removeClass('outline');
          jQuery('.rims h4:nth-child(' + type + ')').show();
          jQuery('.pick_your_style li:nth-child(' + type + ')').addClass('outline');
        } else if ($('.rims h4').is(':hidden')) {
          jQuery('rims h4:nth-child(' + type + ')').show();
        }
      })
    }


})
