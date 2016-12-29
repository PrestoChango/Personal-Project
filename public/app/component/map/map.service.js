angular.module('app')
  .service('mapsSrvc', function ($http) {

    this.getAllLocations = () => {
      return $http({
        method: 'GET',
        url: '/chargers'
      }).then((response) => {
        return response.data;
    })
  }
})
