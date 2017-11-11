var datastore = require('../datastore');

exports.index = function(req, res) {
    return res.json(200, datastore.products);
} ;

// Get a single product
exports.show = function(req, res) {
     if (datastore.products[req.params.code]) {
        return res.json(datastore.products[req.params.code]);
      }
      else
        {
        return res.send(404)
      }

};

// Creates a new product in datastore.
exports.create = function(req, res) {
    var product = {
       id: req.params.code,
       name: req.body.name,
       description: req.body.description 
    };
    if (datastore.products[req.params.code]) {
      return res.send(409,'Id already exists')
    } else {
       datastore.products[req.params.code] = product
       return res.json(201, product);
     }
};