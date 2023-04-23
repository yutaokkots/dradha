const Quote = require('../models/quote')

// $sample and .aggregate() used to obtain a random object from model
async function getRand(req, res){
    console.log('controller')
    try {
        const quote = await Quote.aggregate([{$sample:{size: 1}}])
        const singleQuote = quote[0]
        res.json(singleQuote)
    }catch(err){
        res.status(400).json('Not found')
    }
}

module.exports = {
    getRand
}