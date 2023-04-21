const Intent = require('../models/intent')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function getAll(req, res){
    try {
        const intents = await Intent.find({intentUserId: req.user._id})
        res.json(intents)
    }catch(err){
        res.status(400).json('Not found')

    }
}


async function create(req, res){
    try {
        const intent = await Intent.create(req.body)
        res.json(intent)
    } catch(err){
        res.status(400).json('Internal Error')
    }
}

async function deleteOne(req,res){
    try{
        await Intent.deleteOne({_id: req.params.id})
    } catch(err){
        res.status(400).json('Error')
    }
}

async function completeOne(req,res){
    try{
        await Intent.findOneAndUpdate(
            { _id: req.params.id },
            {$set:{intentComplete: true},
            $currentDate: { lastModified: true }
            })

        console.log('in controller completeONe')
    } catch(err){
        res.status(400).json('Error')
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
    deleteOne,
    completeOne
}