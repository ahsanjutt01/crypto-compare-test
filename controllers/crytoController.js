

const http = require('../lib/httpRequest');
const { endpoint } = require('../utils/config');

const PriceMultiFull = require('../models/priceMultiFull');

const getPriceMultiFull = async (req, res, next) => {
try {
    const {fsyms, tsyms} = req.query;
    const result = await http.request('POST', `${endpoint}/data/pricemultifull?fsyms=${fsyms}&tsyms=${tsyms}`);

    return res.json({result : result.data});
} catch (error) {
    console.log(error);
    next();
}
}

const savePriceMultiFull = async (params, data) => {
try {
    const priceMultiFull = new PriceMultiFull();
    priceMultiFull.params = params;
    priceMultiFull.result = data;
    const priceMultiFullSaved =  await priceMultiFull.save();
    return true
} catch (error) {
    console.log(error);
    return false;
}
}

module.exports = {
    getPriceMultiFull,
    savePriceMultiFull,
};
