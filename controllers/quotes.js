const Quote = require('../models/quote')

// $sample and .aggregate() used to obtain a random object from model
async function getRand(req, res){
    console.log('controller')
    try {
        const quote = await Quote.aggregate([{$sample:{size: 1}}])
        const data = {
            quote: quote[0]['quote'],
            source: quote[0]['source']}

        res.json(data)
    }catch(err){
        res.status(400).json('Not found')
    }
}

module.exports = {
    getRand
}