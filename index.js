require('dotenv').config()

require('./DB/connection')

const express = require('express')

const router = require('./Routes/router')

const cors = require('cors')

// Create a server

const dropCartServer = express()

dropCartServer.use(cors())

dropCartServer.use(express.json())

dropCartServer.use(router)

const PORT = 3000 || process.env.PORT

dropCartServer.listen(PORT, () => {
    console.log(`@ @ @ Dropping cart server running at PORT : ${PORT}`);
})