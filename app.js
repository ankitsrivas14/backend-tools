const express = require('express')();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

express.use(bodyParser.urlencoded());

//Routes
express.use('/admin', adminRoutes);
express.use('/product', shopRoutes);


//Not found router
express.use('/', (req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
})


express.listen(3000);