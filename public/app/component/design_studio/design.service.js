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

    this.changeRoof = function(roof) {
      return $http({
        method: 'GET',
        url: '/changeRoof/' + roof
      }).then(function(response) {
        return response.data;
      })
    }

    this.changeLiner = function(liner) {
      return $http({
        method: 'GET',
        url: '/changeLiner/' + liner
      }).then(function(response) {
        return response.data;
      })
    }

    this.changeSeats = function(seats) {
      return $http({
        method: 'GET',
        url: '/changeSeats/' + seats
      }).then(function(response) {
        return response.data;
      })
    }

    this.changeDecor = function(decor) {
      return $http({
        method: 'GET',
        url: '/changeDecor/' + decor
      }).then(function(response) {
        return response.data;
      })
    }

    this.createOrder = function(order) {
      order = angular.toJson(order, true);
      return $http({
        method: 'POST',
        url: '/checkout',
        data: order
      }).then(function(response) {
        return response.data[0].order_id;
      })
    }

    this.createCustomer = function(customer) {
      return $http({
        method: 'POST',
        url: '/createCustomer',
        data: customer
      }).then(function(response) {
        return response;
      })
    }

    this.verifyLogin = function(params) {
      return $http({
        method: 'GET',
        url: '/checkLogin/',
        params: params
      }).then(function(response) {
        return response.data[0];
      })
    }

    this.getOrder = function(id) {
      return $http({
        method: 'GET',
        url: '/getOrder/' + id
      }).then(function(response) {
        return response.data[0];
      })
    }

    this.getCar = function(data) {
      return $http({
        method: 'GET',
        url: '/getCar/',
        params: data
      }).then(function(response) {
        return response.data[0];
      })
    }


});
