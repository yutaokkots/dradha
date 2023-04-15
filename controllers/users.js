const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')

module.exports = {
    create,
    login
}

async function create(req, res){
    try{
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token)
    } catch(err){
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json(creatteJWT(user))    
    } catch(err){
        res.statuus(400).json('Credentials do not match')
    }
}