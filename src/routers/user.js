
const express = require ('express')
const User = require('../models/user')


const router = express.Router()


// login : 
router.post('/login',async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateToken()
        res.status(200).send({ user , token})
    }
    catch(e){
        res.status(400).send(e.message)
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////

  router.post ('/users' , async (req , res) => {
    try {
        const user = new User (req.body)
        const token = await user.generateToken()
        await user.save()
         res.status(200).send({user , token})
    } catch (e) {
        res.status(400).send(e)
    }
})
 



////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router 
