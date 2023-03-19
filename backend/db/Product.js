const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    company: String,
    userid: String
});

module.exports = mongoose.model('products', productschema);

