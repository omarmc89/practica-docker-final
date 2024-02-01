const express = require('express');

let router = express.Router();
let pinturasController = require('../controllers/pinturas');

router
    .get('/pinturas', pinturasController.getPinturas)

    
module.exports = router;