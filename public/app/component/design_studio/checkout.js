angular.module('app')
  .controller('checkout', function($scope, designFact, designSrvc) {

        $scope.individual = designFact.getCust();
        $scope.car = designFact.get();
        console.log($scope.individual);
        console.log($scope.car);
        designSrvc.getCar($scope.car).then(function(response) {
          $scope.personalizedCar = response;
          console.log($scope.personalizedCar);
        });

  })
