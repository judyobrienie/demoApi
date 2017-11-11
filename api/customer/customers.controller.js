var _ = require('lodash')
var datastore = require('../datastore');

// Get list of customers
exports.index = function(req, res) {
    return res.json(200, datastore.customers);
} ;
 
// Get a single customer
exports.show = function(req, res) {
    var index = _.findIndex(datastore.customers , 
           function(customer) {
              return customer.id == req.params.id;
        });      
     if (index != -1) {
        return res.json(datastore.customers[index] );
      }
      else
        {
         return res.send(404)
       }

};

// Creates a new customer in datastore.
exports.create = function(req, res) {
    var nextId = 0
    var last = _.last(datastore.customers)
    if (last != undefined) {
       nextId = last.id + 1
    } else {
      nextId = 1
    }
    var customer = {
       id: nextId,
       name: req.body.name,
       address: req.body.address 
    };
    datastore.customers.push(customer)
    return res.json(201, customer);
};

// Deletes a customer from datastore.
exports.destroy = function(req, res) {
    var elements = _.remove(datastore.customers , 
           function(customer) {
              return customer.id == req.params.id;
        });  
     if (elements.length == 1) {
        return res.send(200);
        }
      else
        {
         return res.send(404)
      }
};
