var app = require('../index.js');
var db = app.get('db');

module.exports = {

    getChargeLocations: function(req, res, next) {
      db.get_all_chargers(function(err, chargers) {
        res.send(chargers);
      })
    },
    getAllProduct: function(req, res, next) {
      db.get_all_product(function(err, product) {
        res.send(product);
      })
    },
    customizeCar: function(req, res, next) {
      db.get_car_part(req.params.id, function(err, part) {
        res.send(part);
      })
    },
    changeWheel: function(req, res, next) {
      db.change_wheel(req.params.id, function(err, wheel) {
        res.send(wheel);
      })
    }
}
