const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlRecord = new Schema({
    shortUrn: {
    	type: String,
        trim: true,
        required: true
    },
    longUrl: {
    	type: String,
        trim: true,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    username: String,
    clicks: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('UrlRecord', UrlRecord);