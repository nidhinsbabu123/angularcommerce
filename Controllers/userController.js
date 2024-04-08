const users = require('../modelsforschema/userSchema')

const jwt =require('jsonwebtoken') 

const jwtSecret = process.env.JWTSECRET

// logic to register

exports.registerController = async (req, res) => {
    const{username, email, password} = req.body

    // To Check weather a user allready exists or not

    try{
        const userDetails = await users.findOne({email})

        if(userDetails){
            res.status(406).json("User allready exists, Please Login")
        }else{
            const newUser = new users({
                username, email, password
            })

            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }

}

// Login

exports.loginController = async (req, res) => {

    const {email, password} = req.body

    // in the schema, we had given email-id as unique

    try{
        const existingUser = await users.findOne({email, password})

        if(existingUser){

            const tocken = jwt.sign({userId : existingUser._id}, jwtSecret)

            res.status(200).json({existingUser, tocken})

        }

    }
    catch(err){
        res.status(401).json(err)
    }
    
}