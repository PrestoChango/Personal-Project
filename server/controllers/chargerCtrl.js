var app = require('../index.js');
      var db = app.get('db');

module.exports = {

    getChargeLocations: function(req, res, send) {
      db.get_all_chargers(function(err, chargers) {
        res.send(chargers);
      })
    }
}
