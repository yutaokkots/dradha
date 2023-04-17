const User = require('../models/user')
const Profile = require('../models/profile.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}


async function create(req, res){
    try{
        const user = await User.create(req.body);
        const profile = await Profile.create({profileUserId: user._id})
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
        res.json(createJWT(user))    
    } catch(err){
        res.status(400).json('Credentials do not match')
    }
}

module.exports = {
    create,
    login,
    createJWT
}
