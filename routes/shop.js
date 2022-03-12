const path = require('path');

const router = require('express').Router();

const rootPath = require('../util/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
})

module.exports = router;