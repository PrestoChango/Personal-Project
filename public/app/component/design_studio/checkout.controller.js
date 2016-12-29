angular.module('app')
  .controller('checkoutCtrl', function($scope, $state, designFact, designSrvc) {

    $scope.orderDetails = designFact.get();

    $scope.passInfo = (cust) => {
      designSrvc.createOrder($scope.orderDetails).then((response) => {
        cust.order_id = response;
        designFact.passCust(cust);
        designSrvc.createCustomer(cust).then((response) => {
          designFact.passCust(cust);
          $state.go('yourcar');
        })
      });
    }

  })
