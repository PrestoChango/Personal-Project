angular.module('app')
  .factory('designFact', function() {
    let order = {};
    let customer = {};

    let passOrder = function(data) {
      order = data;
    }

    let getOrder = () => {
      return order;
    }

    let passCustomerInfo = (data) => {
      customer = data;
    }

    let getCustomerInfo = () => {
      return customer;
    }

    return {
      pass: passOrder,
      get: getOrder,
      passCust: passCustomerInfo,
      getCust: getCustomerInfo
    }

})
