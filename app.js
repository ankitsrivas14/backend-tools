const bodyParser = require('body-parser');
const path = require('path');

const express = require('express')();

const rootPath = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

express.use(bodyParser.urlencoded({extended: false}));

//Routes
express.use('/admin', adminRoutes);
express.use('/product', shopRoutes);


//Not found router
express.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
})


express.listen(3000);