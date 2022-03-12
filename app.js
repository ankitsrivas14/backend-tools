const express = require('express')();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

express.use(bodyParser.urlencoded());

express.use(adminRoutes);
express.use(shopRoutes);


express.listen(3000);