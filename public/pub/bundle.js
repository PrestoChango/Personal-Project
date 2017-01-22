'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('/', {
    url: "/home",
    templateUrl: "../../../views/home.html"
  }).state('home', {
    url: "/home",
    templateUrl: "../../../views/home.html"
  }).state('all', {
    url: "/charging_map",
    templateUrl: "../../../views/charging_map.html",
    controller: 'mapsCtrl'
  }).state('modelS', {
    url: '/modelS',
    templateUrl: "../../../views/modelS.html"
  }).state('modelX', {
    url: '/modelX',
    templateUrl: "../../../views/modelX.html"
  }).state('model3', {
    url: '/model3',
    templateUrl: "../../../views/model3.html"
  }).state('shop', {
    url: '/shop',
    templateUrl: "../../../views/shop.html"
  }).state('shopD', {
    url: '/shop_design',
    templateUrl: "../../../views/shop_design.html"
  }).state('customize', {
    url: '/customize',
    templateUrl: "../../../views/customize.html",
    controller: 'designCtrl'
  }).state('order', {
    url: '/order',
    templateUrl: "../../../views/place_order.html",
    controller: 'checkoutCtrl'
  }).state('yourcar', {
    url: '/yourcar',
    templateUrl: "../../../views/your_car.html",
    controller: 'personalCtrl'
  }).state('signin', {
    url: '/login',
    templateUrl: "../../../views/login.html",
    controller: 'loginCtrl'
  }).state('complete', {
    url: '/complete',
    templateUrl: "../../../views/complete.html",
    controller: 'checkout'
  });
});
'use strict';

angular.module('app').controller('loginCtrl', function ($scope, $state, designSrvc, designFact) {

  $scope.valid = true;
  $scope.login = function () {
    designSrvc.verifyLogin($scope.user).then(function (response) {
      designFact.passCust(response);
      if (response === undefined) {
        $scope.valid = false;
      } else {
        designSrvc.getOrder(response.order_id).then(function (response) {

          $scope.options = {
            rim_id: response.rim_id,
            color_id: response.color_id,
            roof_id: response.roof_id,
            seat_id: response.seat_id,
            liner_id: response.liner_id,
            decor_id: response.decor_id
          };
          designFact.pass($scope.options);
          $state.go('yourcar');
        });
      }
    });
  };
});
'use strict';

angular.module('app').controller('mapsCtrl', function ($scope, mapsSrvc) {

  $scope.getChargers = function () {
    mapsSrvc.getAllLocations().then(function (response) {
      for (var i = 0; i < response.length; i++) {
        response[i].gps = response[i].gps.split(', ');
      }
      $scope.location = response;
      $scope.initMap();
    });
  };

  $scope.initMap = function () {
    $scope.icon = {
      url: "../../../assets/img/supercharger.png",
      scaledSize: new google.maps.Size(23, 35)
    };

    $scope.mapDiv = document.getElementById('map');

    $scope.map = new google.maps.Map($scope.mapDiv, {
      center: { lat: 39.8333333, lng: -98.585522 },
      zoom: 5,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      styles: [{
        featureType: 'road',
        stylers: [{ saturation: -80 }]
      }, {
        featureType: 'poi',
        stylers: [{ lightness: 40 }, { saturation: -50 }]
      }]
    });

    //autocomplete code
    $scope.infowindow = new google.maps.InfoWindow();
    $scope.marker1 = new google.maps.Marker({
      map: $scope.map,
      anchorPoint: new google.maps.Point(0, -29)
    });
    $scope.input = document.getElementById('search-box');

    $scope.options = {
      types: ['(cities)'],
      componentRestrictions: { country: 'us' }
    };
    $scope.autoComplete = new google.maps.places.Autocomplete($scope.input, $scope.options);
    $scope.autoComplete.bindTo('bounds', $scope.map);

    //runs when place is selected from dropdown list
    $scope.autoComplete.addListener('place_changed', function () {
      $scope.infowindow.close();
      $scope.marker1.setVisible(false);
      $scope.place = $scope.autoComplete.getPlace();
      if (!$scope.place.geometry) {
        //  window.alert("Autocomplete's returned place contains no geometry");
        return;
      }

      if ($scope.place.geometry.viewport) {
        $scope.map.fitBounds($scope.place.geometry.viewport);
        $scope.map.setZoom(8);
      } else {
        $scope.map.setCenter($scope.place.geometry.location);
        $scope.map.setZoom(8);
      }

      $scope.marker1.setIcon( /** @type {google.maps.Icon} */{
        url: $scope.place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      });

      $scope.marker1.setPosition($scope.place.geometry.location);
      $scope.marker1.setVisible(true);

      $scope.address = '';
      if ($scope.place.address_components) {
        $scope.address = [$scope.place.address_components[0] && $scope.place.address_components[0].short_name || '', $scope.place.address_components[1] && $scope.place.address_components[1].short_name || '', $scope.place.address_components[2] && $scope.place.address_components[2].short_name || ''].join(' ');
      }

      $scope.infowindow.setContent('<div><strong>' + $scope.place.name + '</strong><br>' + $scope.address);
      $scope.infowindow.open($scope.map, $scope.marker1);
    });

    for (var i = 0; i < $scope.location.length; i++) {
      $scope.latLng = new google.maps.LatLng($scope.location[i].gps[0], $scope.location[i].gps[1]);
      $scope.marker = new google.maps.Marker({
        position: $scope.latLng,
        map: $scope.map,
        icon: $scope.icon
      });
      $scope.marker.info = $scope.location[i];
      $scope.marker.addListener('click', function () {
        $scope.station = this.info;
        $scope.map.setZoom(8);
        if ($('.info-pane').is(':hidden')) {
          $('.info-pane').show();
        }
        $scope.latLng = new google.maps.LatLng(this.info.gps[0], this.info.gps[1]);
        $scope.map.setCenter($scope.latLng);
        $scope.$apply();
      });
    }
  };

  $scope.getChargers();
});
'use strict';

angular.module('app').service('mapsSrvc', function ($http) {

  this.getAllLocations = function () {
    return $http({
      method: 'GET',
      url: '/chargers'
    }).then(function (response) {
      return response.data;
    });
  };
});
'use strict';

angular.module('app').directive('animation', function () {

  return {
    restrict: 'EA',
    link: function link(scope, elem, attr) {
      $('.your_car button').on('click', function () {
        $('.your_car button').removeClass('outline');
        $(this).addClass('outline');
      });

      $('.select_performance div').on('click', function () {
        $('.select_performance div').removeClass('outline');
        $(this).addClass('outline');
      });

      $('.pick_a_color li').on('click', function () {
        var color = $(this).val();
        if ($('.under_text h4').is(':visible')) {
          $('.under_text h4').hide();
          $('.pick_a_color li').removeClass('outline');
          $('.under_text h4:nth-child(' + color + ')').show();
          $('.pick_a_color li:nth-child(' + color + ')').addClass('outline');
        } else if ($('.under_text h4').is(':hidden')) {
          $('.under_text h4:nth-child(' + color + ')').show();
        }
      });

      $('.pick_your_style li').on('click', function () {
        var type = $(this).val();
        if ($('.rims h4').is(':visible')) {
          $('.rims h4').hide();
          $('.pick_your_style li').removeClass('outline');
          $('.rims h4:nth-child(' + type + ')').show();
          $('.pick_your_style li:nth-child(' + type + ')').addClass('outline');
        } else if ($('.rims h4').is(':hidden')) {
          $('rims h4:nth-child(' + type + ')').show();
        }
      });

      $('.pick_roof_type li').on('click', function () {
        var roof = $(this).val();
        $('.roof h4').hide();
        $('.roof h4:nth-child(' + roof + ')').show();
        $('.pick_roof_type li').removeClass('outline');
        $('.pick_roof_type li:nth-child(' + roof + ')').addClass('outline');
      });

      $('.pick_headliner li').on('click', function () {
        var headliner = $(this).val();
        $('.headliner h4').hide();
        $('.headliner h4:nth-child(' + headliner + ')').show();
        $('.pick_headliner li').removeClass('outline');
        $('.pick_headliner li:nth-child(' + headliner + ')').addClass('outline');
      });

      $('.pick_decor li').on('click', function () {
        var decor = $(this).val();
        $('.decor h4').hide();
        $('.decor h4:nth-child(' + decor + ')').show();
        $('.pick_decor li').removeClass('outline');
        $('.pick_decor li:nth-child(' + decor + ')').addClass('outline');
      });

      $('.pick_seats li').on('click', function () {
        var seats = $(this).val();
        $('.seats h4').hide();
        $('.seats h4:nth-child(' + seats + ')').show();
        $('.pick_seats li').removeClass('outline');
        $('.pick_seats li:nth-child(' + seats + ')').addClass('outline');
      });
    }
  };
});
'use strict';

angular.module('app').directive('carsFooter', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/cars_footer.html'
  };
});
'use strict';

angular.module('app').directive('carContainer', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/car_container.html'
  };
});
'use strict';

angular.module('app').directive('fixedHeader', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/fixed_header.html'
  };
});
'use strict';

angular.module('app').directive('broadHeader', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/header.html'
  };
});
'use strict';

angular.module('app').directive('infoPane', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/infoPane.html',
    link: function link(scope, element, attr) {

      element.on('click', function (e) {

        if (angular.element(e.target).hasClass('close')) {
          $('.info-pane').hide();
        }
      });
    }
  };
});
'use strict';

angular.module('app').directive('shopFooter', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/shop_footer.html'
  };
});
'use strict';

angular.module('app').directive('shopHeader', function () {

  return {
    restrict: 'E',
    templateUrl: 'app/component/directives/templates/shop_header.html'
  };
});
'use strict';

angular.module('app').controller('checkoutCtrl', function ($scope, $state, designFact, designSrvc) {

  $scope.orderDetails = designFact.get();

  $scope.passInfo = function (cust) {
    designSrvc.createOrder($scope.orderDetails).then(function (response) {
      cust.order_id = response;
      designFact.passCust(cust);
      designSrvc.createCustomer(cust).then(function (response) {
        designFact.passCust(cust);
        $state.go('yourcar');
      });
    });
  };
});
'use strict';

angular.module('app').controller('checkout', function ($scope, designFact, designSrvc) {

  $scope.individual = designFact.getCust();
  $scope.car = designFact.get();
  designSrvc.getCar($scope.car).then(function (response) {
    $scope.personalizedCar = response;

    $scope.total = $scope.personalizedCar.rim_price + $scope.personalizedCar.color_price + $scope.personalizedCar.roof_price + $scope.personalizedCar.liner_price + $scope.personalizedCar.seat_price + $scope.personalizedCar.decor_price + 53000;

    $scope.total = $scope.total.toString().split('');
    $scope.total.splice($scope.total.length - 3, 0, ',');
    $scope.total = $scope.total.join('');

    $scope.confirm = $scope.individual.order_id + 21950158;
  });
});
'use strict';

angular.module('app').controller('designCtrl', function ($scope, designSrvc, designFact) {

  //Exterior images
  $scope.base = { img: './assets/img/design-shop/base.jpg' };
  $scope.cover = { img: './assets/img/design-shop/paint/solidwhite.png' };
  $scope.roof = {};
  $scope.tires = { img: './assets/img/design-shop/exterior/slipstream19.png' };

  //Interior images
  $scope.iBase = { img: '/assets/img/design-shop/interior/base.jpg' };
  $scope.baseInt = { img: '/assets/img/design-shop/interior/base2.png' };
  $scope.liner = { img: '/assets/img/design-shop/interior/white-headliner.png' };
  $scope.decor = { img: '/assets/img/design-shop/interior/dark-ash-decor.png' };

  $scope.monetize = function () {
    $scope.total = $scope.total.toString().split('');
    $scope.total.splice($scope.total.length - 3, 0, ',');
    $scope.total = $scope.total.join('');
  };

  $scope.total = 53000;
  $scope.monetize();

  $scope.customCar = {
    carType: { model: 't60', price: 53000 },
    carColor: { paint: 'Solid White', price: 0 },
    carWheels: { rims: '19" Silver Slipstream Wheels', price: 0 },
    carRoof: { roof: 'Body', price: 0 },
    headliner: { liner: 'White Alcantara Headliner', price: 0 },
    decor: { decor: 'Dark Ash Wood Decor', price: 0 },
    seats: { seat: 'Multi-Pattern Black Seats', price: 0 },
    options: { rim_id: 1, color_id: 2, liner_id: 2, decor_id: 3, seat_id: 1, roof_id: 1 }
  };

  $scope.passOrder = function () {
    designFact.pass($scope.customCar.options);
  };

  $scope.calculateCost = function () {
    $scope.total = $scope.customCar.carType.price + $scope.customCar.carColor.price + $scope.customCar.carWheels.price + $scope.customCar.carRoof.price + $scope.customCar.headliner.price + $scope.customCar.seats.price + $scope.customCar.decor.price;
    $scope.monetize();
  };

  $scope.paint = function (color) {
    designSrvc.updateBody(color).then(function (response) {
      $scope.cover.img = response[0].color_url;
      $scope.customCar.carColor.paint = response[0].color;
      $scope.customCar.carColor.price = response[0].color_price;
      $scope.customCar.options.color_id = color;
      $scope.calculateCost();
    });
  };

  $scope.changeWheel = function (type) {
    designSrvc.changeWheel(type).then(function (response) {
      $scope.tires.img = response[0].rim_url;
      $scope.customCar.carWheels.rims = response[0].style;
      $scope.customCar.carWheels.price = response[0].rim_price;
      $scope.customCar.options.rim_id = type;
      $scope.calculateCost();
    });
  };

  $scope.changeRoof = function (roof) {
    designSrvc.changeRoof(roof).then(function (response) {
      $scope.roof.img = response[0].roof_url;
      $scope.customCar.carRoof.roof = response[0].roof;
      $scope.customCar.carRoof.price = response[0].roof_price;
      $scope.customCar.options.roof_id = roof;
      $scope.calculateCost();
    });
  };

  $scope.changeHeadliner = function (liner) {
    designSrvc.changeLiner(liner).then(function (response) {
      $scope.liner.img = response[0].liner_url;
      $scope.customCar.headliner.liner = response[0].liner;
      $scope.customCar.headliner.price = response[0].liner_price;
      $scope.customCar.options.liner_id = liner;
      $scope.calculateCost();
    });
  };

  $scope.changeDecor = function (decor) {
    designSrvc.changeDecor(decor).then(function (response) {
      $scope.decor.img = response[0].decor_url;
      $scope.customCar.decor.decor = response[0].decor;
      $scope.customCar.decor.price = response[0].decor_price;
      $scope.customCar.options.decor_id = decor;
      $scope.calculateCost();
    });
  };

  $scope.changeSeats = function (seats) {
    designSrvc.changeSeats(seats).then(function (response) {
      console.log(response);
      $scope.iBase.img = response[0].seat_url;
      $scope.baseInt.img = response[0].seat_mid_url;
      $scope.customCar.seats.seats = response[0].seats;
      $scope.customCar.seats.price = response[0].seat_price;
      $scope.customCar.options.seat_id = seats;
      $scope.calculateCost();
    });
  };
});
'use strict';

angular.module('app').factory('designFact', function () {
  var order = {};
  var customer = {};

  var passOrder = function passOrder(data) {
    order = data;
  };

  var getOrder = function getOrder() {
    return order;
  };

  var passCustomerInfo = function passCustomerInfo(data) {
    customer = data;
  };

  var getCustomerInfo = function getCustomerInfo() {
    return customer;
  };

  return {
    pass: passOrder,
    get: getOrder,
    passCust: passCustomerInfo,
    getCust: getCustomerInfo
  };
});
'use strict';

angular.module('app').service('designSrvc', function ($http) {

  this.updateBody = function (color) {
    return $http({
      method: 'GET',
      url: '/customize/' + color
    }).then(function (response) {
      return response.data;
    });
  };

  this.changeWheel = function (type) {
    return $http({
      method: 'GET',
      url: '/changeWheel/' + type
    }).then(function (response) {
      return response.data;
    });
  };

  this.changeRoof = function (roof) {
    return $http({
      method: 'GET',
      url: '/changeRoof/' + roof
    }).then(function (response) {
      return response.data;
    });
  };

  this.changeLiner = function (liner) {
    return $http({
      method: 'GET',
      url: '/changeLiner/' + liner
    }).then(function (response) {
      return response.data;
    });
  };

  this.changeSeats = function (seats) {
    return $http({
      method: 'GET',
      url: '/changeSeats/' + seats
    }).then(function (response) {
      return response.data;
    });
  };

  this.changeDecor = function (decor) {
    return $http({
      method: 'GET',
      url: '/changeDecor/' + decor
    }).then(function (response) {
      return response.data;
    });
  };

  this.createOrder = function (order) {
    order = angular.toJson(order, true);
    return $http({
      method: 'POST',
      url: '/checkout',
      data: order
    }).then(function (response) {
      return response.data[0].order_id;
    });
  };

  this.createCustomer = function (customer) {
    return $http({
      method: 'POST',
      url: '/createCustomer',
      data: customer
    }).then(function (response) {
      return response;
    });
  };

  this.verifyLogin = function (params) {
    return $http({
      method: 'GET',
      url: '/checkLogin/',
      params: params
    }).then(function (response) {
      return response.data[0];
    });
  };

  this.getOrder = function (id) {
    return $http({
      method: 'GET',
      url: '/getOrder/' + id
    }).then(function (response) {
      return response.data[0];
    });
  };

  this.getCar = function (data) {
    return $http({
      method: 'GET',
      url: '/getCar/',
      params: data
    }).then(function (response) {
      return response.data[0];
    });
  };
});
'use strict';

angular.module('app').controller('personalCtrl', function ($scope, $state, designFact, designSrvc) {

    $scope.individual = designFact.getCust();
    $scope.car = designFact.get();

    designSrvc.getCar($scope.car).then(function (response) {
        $scope.personalizedCar = response;
    });

    $scope.getInfo = function () {
        designFact.get();
    };

    $scope.completeOrder = function () {
        $state.go('complete');
    };
});
//# sourceMappingURL=bundle.js.map
