const User = require('../../models/user')
const jwt = require('jsonwebtoken')

async function create(req, res) {
    try {
        //const newUser = new User(req.body)
        const user = await User.create(req.body);   //Object.create()
        const token = createJWT(user);
        //await newUser.save()
        res.json(token);
    } catch(err){
        res.status(400).json(err);
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

// Helper Function (locatd in server side) to create the token
function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

async function validate(req, res) {
    try{
      const user = await User.findOne({email: req.body.email})
      const result = await bcrypt.compare(req.body.password, user.password)
      if (result){
        const token = createJWT(user)
        res.json(token)
      } else {
        res.status(400).json(error)
      }
    }catch(error){
      res.status(400).json(error)
    }
  }


module.exports = {
    create,
    checkToken,
    createJWT,
    validate
}