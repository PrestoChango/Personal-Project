angular.module('app')
  .controller('personalCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.individual = designFact.getCust();
    $scope.car = designFact.get();

    designSrvc.getCar($scope.car).then((response) => {
      $scope.personalizedCar = response;
    });

    $scope.getInfo = () => {
      designFact.get();
    }

    $scope.completeOrder = () => {
      $state.go('complete');
    }
})
