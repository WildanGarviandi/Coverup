/**
 * Created by wildangarviandi on 5/26/16.
 */
var express = require('express');
var orderController = require('./controller/OrderController');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use('/api/', orderController);

module.exports = router;