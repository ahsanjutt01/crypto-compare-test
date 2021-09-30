
const cron = require("node-cron");
const mongoose = require('mongoose');

const http = require('../lib/httpRequest');
const PriceMultiFull = require('../models/priceMultiFull');
const {
    savePriceMultiFull,
} = require('../controllers/crytoController');

const { endpoint } = require('../utils/config');

module.exports.startCron = async () => {
    try {
        cron.schedule("*/5 * * * *", async () => {
            const result = await http.request('POST', `${endpoint}/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR`);
            const save = await savePriceMultiFull({fsyms:'BTC', tsyms: 'USD,EUR' }, JSON.stringify(result.data));
            console.log('cron save price multi successful');
        });
    } catch (error) {
        console.log(error);
    }
}
