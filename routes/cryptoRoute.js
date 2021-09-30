let router = require('express').Router();

const {getPriceMultiFull} = require('../controllers/crytoController');

router.get('/pricemultifull', getPriceMultiFull);

module.exports = router;
