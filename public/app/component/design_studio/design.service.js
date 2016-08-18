angular.module('app')
  .service('designSrvc', function ($http) {

    this.updateBody = function (color) {
        return $http({
          method: 'GET',
          url: '/customize/' + color
      }).then(function(response) {
        return response.data;
      })
    }

    this.changeWheel = function(type) {
      return $http({
        method: 'GET',
        url: '/changeWheel/' + type
      }).then(function(response) {
        return response.data;
        })
    }

  });
