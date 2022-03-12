const router = require('express').Router();

router.get('/add-product',(req, res, next) => {
    res.send('GET /add-product');
})

router.post('/add-product',(req, res, next) => {
    res.send('POST /add-product');
})


module.exports = router;