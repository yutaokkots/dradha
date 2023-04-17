const Intent = require('../models/intent')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function getAll(req, res){
    console.log(req.user._id)
    try {
        console.log(req.user._id)
        const intents = await Intent.find({intentUserId: req.user._id})
        console.log(intents)
        res.json(intents)
    }catch(err){
        res.status(400).json('Not found')
    }
}
//Intent.find({}, function(intents) {
//If (intentUserId === req.user._id) {

function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

async function create(req, res){
    try {
        console.log('the create works')
        const intent = await Intent.create(req.body)
        res.json(intent)
    } catch(err){
        res.status(400).json('Internal Error')
    }
}

function save(){
    try {
            // const user = await User.findOne({email: req.body.email})
            // if (!user) throw new Error()
            // const match = await bcrypt.compare(req.body.password, user.password)
            // if (!match) throw new Error()
            // res.json(createJWT(user))    
    } catch(err){
        res.status(400).json('Credentials do not match')
    }
}


module.exports = {
    create,
    save,
    getAll,

}