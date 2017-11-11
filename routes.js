module.exports = function (app) {

   app.use("/api/customers", require("./api/customers/index"));
   app.use("/api/products", require("./api/products/index"));
   app.use("/api/contacts", require("./api/contacts/index"));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|app|assets)/*')
        .get(function (req, res) {
            res.send(404);
        })

};