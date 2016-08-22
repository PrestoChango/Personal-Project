angular.module('app')
  .controller('designCtrl', function($scope, designSrvc, designFact) {

    $scope.cover = {
      img: './assets/img/design-shop/paint/solidwhite.png'
    }

    $scope.roof = {
      img: './assets/img/design-shop/exterior/sunroof.png'
    }

    $scope.tires = {
      img: './assets/img/design-shop/exterior/slipstream19.png'
    }

    $scope.pricing = {
      model: {
        t60: 53000,
        t75: 61500,
        t90: 76500,
        p90d: 96500
      }
    }

    $scope.total = 53000;

    $scope.customCar = {
      carType: {
        model: 't60',
        price: 53000
      },
      carColor: {
        paint: 'Solid White',
        price: 0
      },
      carWheels: {
        rims: '19" Silver Slipstream Wheels',
        price: 0
      },
      options: {
        rim_id: 1,
        color_id: 2
      }
    };

    $scope.passOrder = function() {
      designFact.pass($scope.customCar.options);
    };

    $scope.calculateCost = function() {
      $scope.total = $scope.customCar.carType.price + $scope.customCar.carColor.price + $scope.customCar.carWheels.price;
    }

    $scope.changePerformance = function(option) {
      jQuery('.select_performance div').removeClass('outline');
      jQuery('.select_performance div:nth-child(' + option + ')').addClass('outline');
    }

    $scope.paint = function(color) {
      designSrvc.updateBody(color).then(function(response) {
        $scope.cover.img = response[0].color_url;
        $scope.customCar.carColor.paint = response[0].color;
        $scope.customCar.carColor.price = response[0].color_price;
        $scope.customCar.options.color_id = color;
        if($('.under_text h4').is(':visible')) {
          jQuery('.under_text h4').hide();
          jQuery('.pick_a_color li').removeClass('outline')
          jQuery('.under_text h4:nth-child(' + color + ')').show();
          jQuery('.pick_a_color li:nth-child(' + color + ')').addClass('outline');
        } else if ($('.under_text h4').is(':hidden')) {
          jQuery('.under_text h4:nth-child(' + color + ')').show();
        }
        $scope.calculateCost();
      })
    }

    $scope.changeWheel = function(type) {
      designSrvc.changeWheel(type).then(function(response) {
        $scope.tires.img = response[0].rim_url;
        $scope.customCar.carWheels.rims = response[0].style;
        $scope.customCar.carWheels.price = response[0].rim_price;
        $scope.customCar.options.rim_id = type;
        if($('.rims h4').is(':visible')) {
          jQuery('.rims h4').hide();
          jQuery('.pick_your_style li').removeClass('outline');
          jQuery('.rims h4:nth-child(' + type + ')').show();
          jQuery('.pick_your_style li:nth-child(' + type + ')').addClass('outline');
        } else if ($('.rims h4').is(':hidden')) {
          jQuery('rims h4:nth-child(' + type + ')').show();
        }
        $scope.calculateCost();
      })
    }


})
