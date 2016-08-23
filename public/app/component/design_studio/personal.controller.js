angular.module('app')
  .controller('personalCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.individual = designFact.getCust();
    $scope.car = designFact.get();

    console.log($scope.car);

    designSrvc.getCar($scope.car).then(function(response) {
      console.log(response);
      $scope.personalizedCar = response;
    });

    $scope.getInfo = function(){
      console.log(designFact.get());
    }

    $scope.completeOrder = function() {
      $state.go('complete');
    }
})
