angular.module('app')
  .controller('loginCtrl', function($scope, $state, designSrvc, designFact) {

    $scope.login = function() {
      designSrvc.verifyLogin($scope.user).then(function(response) {
        designFact.passCust(response);
        designSrvc.getOrder(response.order_id).then(function(response) {

          $scope.options = {
            rim_id: response.rim_id,
            color_id: response.color_id
          }

          designFact.pass($scope.options);
          $state.go('yourcar');
        });

      })

    }

});
