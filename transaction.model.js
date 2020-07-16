const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transaction = new Schema({
    payee: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String
    },
    note: {
        type: String
    },
    amount: {
        type: Number
    },
    isInflow: {
        type: Boolean
    },
    transaction_cleared: {
        type: Boolean
    }
});
module.exports = mongoose.model('Transaction', Transaction);