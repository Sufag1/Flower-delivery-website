const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flowerSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {String, required: true}
}, { timeStamps: true});

module.exports = mongoose.model('Flower', flowerSchema);