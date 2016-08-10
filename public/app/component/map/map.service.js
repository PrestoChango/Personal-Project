angular.module('maps')
  .service('mapsSrvc', function ($http) {

    this.getAllLocations = function() {
    return $http({
      method: 'GET',
      url: '/chargers'
    }).then(function(response) {
      return response.data;
    })
  }
})
