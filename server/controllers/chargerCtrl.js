const app = require('../index.js');
const db = app.get('db');

module.exports = {

    getChargeLocations: (req, res, next) => {
      db.get_all_chargers(function(err, chargers) {
        res.send(chargers);
      })
    },
    customizeCar: (req, res, next) => {
      db.get_car_part(req.params.id, function(err, part) {
        res.send(part);
      })
    },
    changeWheel: (req, res, next) => {
      db.change_wheel(req.params.id, (err, wheel) => {
        res.send(wheel);
      })
    },
    changeRoof: (req, res, next) => {
      db.change_roof(req.params.id, (err, roof) => {
        res.send(roof);
      })
    },
    changeHeadliner: (req, res, next) => {
      db.change_liner(req.params.id, (err, liner) => {
        res.send(liner);
      })
    },
    changeDecor: (req, res, next) => {
      db.change_decor(req.params.id, (err, decor) => {
        res.send(decor);
      })
    },
    changeSeats: (req, res, next) => {
      db.change_seats(req.params.id, (err, seats) => {
        res.send(seats);
      })
    },
    createOrder: (req, res, next) => {
      db.create_order([req.body.color_id, req.body.rim_id, req.body.roof_id, req.body.seat_id, req.body.liner_id, req.body.decor_id], (err, order) => {
        res.send(order);
      })
    },
    createCustomer: (req, res, next) => {
      db.create_customer([req.body.first, req.body.last, req.body.email, req.body.phone,
      req.body.address1, req.body.city, req.body.state, req.body.zip, req.body.pass, req.body.order_id],
      (err, customer) => {
        res.send(customer);
      })
    },
    verifyLogin: (req, res, next) => {
      db.verify_login([req.query.email, req.query.password], (err, response) => {
        res.send(response);
      })
    },
    getOrder: (req, res, next) => {
      db.get_order(req.params.id, (err, order) => {
        res.send(order);
      })
    },
    getCar: (req, res, next) => {
      db.get_car([req.query.rim_id, req.query.color_id, req.query.roof_id, req.query.liner_id, req.query.seat_id, req.query.decor_id], (err, car) => {
        res.send(car);
      })
    }
}
