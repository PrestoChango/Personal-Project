angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
                    .state('/', {
                      url: "/",
                      templateUrl: "../../../views/index.html"
                    })
                    .state('home', {
                      url: "/home",
                      templateUrl: "../../../views/home.html"
                    })
                    .state('all', {
                      url:"/charging_map",
                      templateUrl:"../../../views/charging_map.html",
                      controller: 'mapsCtrl'
                    })
                    .state('modelS', {
                      url: '/modelS',
                      templateUrl: "../../../views/modelS.html"
                    })
                    .state('modelX', {
                      url: '/modelX',
                      templateUrl: "../../../views/modelX.html"
                    })
                    .state('model3', {
                      url: '/model3',
                      templateUrl: "../../../views/model3.html"
                    })
                    .state('shop', {
                      url: '/shop',
                      templateUrl: "../../../views/shop.html"
                    })
                    .state('shopD', {
                      url: '/shop_design',
                      templateUrl: "../../../views/shop_design.html"
                    })
                    .state('customize', {
                      url: '/customize',
                      templateUrl: "../../../views/customize.html",
                      controller: 'designCtrl'
                    })
                    .state('order', {
                      url: '/order',
                      templateUrl: "../../../views/place_order.html",
                      controller: 'checkoutCtrl'
                    })
                    .state('yourcar', {
                      url: '/yourcar',
                      templateUrl: "../../../views/your_car.html",
                      controller: 'personalCtrl'
                    })
                    .state('signin', {
                      url: '/login',
                      templateUrl: "../../../views/login.html",
                      controller: 'loginCtrl'
                    })
                    .state('complete', {
                      url: '/complete',
                      templateUrl: "../../../views/complete.html",
                      controller: 'checkout'
                    })
});
