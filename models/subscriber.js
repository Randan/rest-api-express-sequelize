const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedChannel: {
        type: String,
        requieed: true
    },
    subscribeChannel: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);