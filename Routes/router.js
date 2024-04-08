// Here we need to route the server

const express = require('express')

const productController = require('../Controllers/productController')

const userController = require('../Controllers/userController')

const router = new express.Router()

router.get('/products/all', productController.getallProductcontrollers)

router.get('/product/view/:id', productController.getaProduct)

// Path to register

router.post('/user/register', userController.registerController)

// Path to login

router.post('/user/login', userController.loginController)

module.exports = router