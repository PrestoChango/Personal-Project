angular.module('app')
  .factory('designFact', function() {
    var order = {};
    var customer = {};

    function passOrder(data) {
      order = data;
    }

    function getOrder() {
      return order;
    }

    function passCustomerInfo(data) {
      customer = data;
    }

    function getCustomerInfo() {
      return customer;
    }

    return {
      pass: passOrder,
      get: getOrder,
      passCust: passCustomerInfo,
      getCust: getCustomerInfo
    }

})
