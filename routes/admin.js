const path = require('path');

const router = require('express').Router();

const rootPath = require('../util/path');


router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
})

router.post('/add-product',(req, res, next) => {
    res.send('POST /add-product');
})


module.exports = router;