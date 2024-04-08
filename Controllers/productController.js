// Controllers is used to handle the request from front end

const shops = require('../modelsforschema/productSchema')



// First request will come to display all products

exports.getallProductcontrollers = async(req, res) => {
    try{
        const allProducts = await shops.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

// To get single product

exports.getaProduct = async (req, res) => {

    const {id} = req.params

    try{
        const product = await shops.findOne({id})
        res.status(200).json(product)
        
    }catch(err){
        res.status(401).json(err)
    }
}