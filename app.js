const express = require('express')();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

express.use(bodyParser.urlencoded());

//Routes
express.use(adminRoutes);
express.use(shopRoutes);


//Not found router
express.use('/', (req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
})


express.listen(3000);