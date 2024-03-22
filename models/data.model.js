const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    
    pairs: [{
        chainId: String,
        dexId: String,
        url: String,
        pairAddress: String,
        baseToken: {
            address: String,
            name: String,
            symbol: String
        },
        quoteToken: {
            address: String,
            name: String,
            symbol: String
        },
        priceNative: String,
        priceUsd: String,
        txns: Object,
        volume: Object,
        priceChange: Object,
        liquidity: Object,
        pairCreatedAt: Number,
        info: {
            imageUrl: String,
            websites: String,
            socials: String
        }
    }]
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
