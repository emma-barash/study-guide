const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biologySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Biology', biologySchema);