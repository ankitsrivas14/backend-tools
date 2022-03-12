const path = require('path');

const router = require('express').Router();

const rootPath = require('../util/path');

router.get('/', (req, res, next) => {
    res.render("shop");
})

module.exports = router;