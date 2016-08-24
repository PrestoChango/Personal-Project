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
    },
    changeRoof: function(req, res, next) {
      db.change_roof(req.params.id, function(err, roof) {
        res.send(roof);
      })
    },
    changeHeadliner: function(req, res, next) {
      db.change_liner(req.params.id, function(err, liner) {
        res.send(liner);
      })
    },
    changeDecor: function(req, res, next) {
      db.change_decor(req.params.id, function(err, decor) {
        res.send(decor);
      })
    },
    changeSeats: function(req, res, next) {
      db.change_seats(req.params.id, function(err, seats) {
        res.send(seats);
      })
    },
    createOrder: function(req, res, next) {
      db.create_order([req.body.color_id, req.body.rim_id, req.body.roof_id, req.body.seat_id, req.body.liner_id, req.body.decor_id], function(err, order) {
        res.send(order);
      })
    },
    createCustomer: function(req, res, next) {
      db.create_customer([req.body.first, req.body.last, req.body.email, req.body.phone,
      req.body.address1, req.body.city, req.body.state, req.body.zip, req.body.pass, req.body.order_id],
      function(err, customer) {
        res.send(customer);
      })
    },
    verifyLogin: function(req, res, next) {
      db.verify_login([req.query.email, req.query.password], function(err, response) {
        res.send(response);
      })
    },
    getOrder: function(req, res, next) {
      db.get_order(req.params.id, function(err, order) {
        res.send(order);
      })
    },
    getCar: function(req, res, next) {
      db.get_car([req.query.rim_id, req.query.color_id, req.query.roof_id, req.query.liner_id, req.query.seat_id, req.query.decor_id], function(err, car) {
        res.send(car);
      })
    }
}
