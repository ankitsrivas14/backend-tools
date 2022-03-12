const express = require('express')();
const bodyParser = require('body-parser');

express.use(bodyParser.urlencoded());

express.post('/test',(req,res,next) => {
    res.send('<h1>POST</h1>')
});
express.get('/test',(req,res,next) => {
    res.send('<h1>GET</h1>')
});


express.listen(3000);