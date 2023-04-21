const Quote = require('../models/quote')
const jwt = require('jsonwebtoken')

// $sample and .aggregate() used to obtain a random object from model
async function getRand(req, res){
    console.log('controller')
    try {
        const quote = await Quote.aggregate([{$sample:{size: 1}}])
        console.log(quote)
        res.json(quote)
    }catch(err){
        res.status(400).json('Not found')
    }
}

module.exports = {
    getRand
}