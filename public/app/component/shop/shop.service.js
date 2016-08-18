angular.module('app')
  .service('shopSrvc', function ($http) {

    this.getProduct = function() {
    return $http({
      method: 'GET',
      url: '/product'
    }).then(function(response) {
      return response.data;
    })
  }
})
