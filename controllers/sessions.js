const Intent = require('../models/intent')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function create(){
    try {
        const 
            // const user = await User.findOne({email: req.body.email})
            // if (!user) throw new Error()
            // const match = await bcrypt.compare(req.body.password, user.password)
            // if (!match) throw new Error()
            // res.json(createJWT(user))    
    } catch(err){
        res.status(400).json('Credentials do not match')
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
    save
}