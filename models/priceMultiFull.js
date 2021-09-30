const mongoose = require('mongoose');
// schema
const priceMultifullSchema = mongoose.Schema({
    result: {
        type: Object,
        required: true
    },
    params: {
        type: Object,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
}, {
    timestemps: true,
});
// Export priceMultifull Model
module.exports = mongoose.model('priceMultifull', priceMultifullSchema);
