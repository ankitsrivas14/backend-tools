const express = require('express')();


express.use((req,res,next) => {
    console.log("In the middleware!");
    next();
})

express.use((req,res,next) => {
    console.log("In another middleware!");
})


express.listen(3000);