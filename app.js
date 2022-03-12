const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

const rootPath = require('./util/path');



const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootPath, 'public')));

//Routes
app.use('/admin', adminRoutes);
app.use('/product', shopRoutes);


//Not found router
app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
})


app.listen(3000);