angular.module('app')
  .controller('checkout', function($scope, designFact, designSrvc) {

        $scope.individual = designFact.getCust();
        $scope.car = designFact.get();
        designSrvc.getCar($scope.car).then(function(response) {
          $scope.personalizedCar = response;
          $scope.total = $scope.personalizedCar.rim_price + $scope.personalizedCar.color_price
          + $scope.personalizedCar.roof_price + $scope.personalizedCar.liner_price
          + $scope.personalizedCar.seat_price + $scope.personalizedCar.decor_price + 53000;
          $scope.total = $scope.total.toString().split('');
          $scope.total.splice($scope.total.length - 3, 0, ',');
          $scope.total = $scope.total.join('');

          $scope.confirm = $scope.individual.order_id + 21950158;
        });

  })
