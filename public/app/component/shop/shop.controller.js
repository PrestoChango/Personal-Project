angular.module('app')
  .controller('shopCtrl', function($scope, shopSrvc) {

    $scope.getProduct = function() {
      shopSrvc.getProduct().then(function(response) {
        $scope.products = response;
        console.log($scope.products);
      })


    }

          $scope.getProduct();
  });
