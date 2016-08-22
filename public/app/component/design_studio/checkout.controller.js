angular.module('app')
  .controller('checkoutCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.orderDetails = designFact.get();

    $scope.passInfo = function(cust) {
      designSrvc.createOrder($scope.orderDetails).then(function(response) {
        cust.order_id = response;
        designFact.passCust(cust);
        designSrvc.createCustomer(cust).then(function(response) {
          designFact.passCust(cust);
          $state.go('yourcar');
        })
      });
    }

  })
