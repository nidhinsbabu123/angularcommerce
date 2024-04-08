const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log("* * * Dropping cart server connected to MongoDB Atlas Successfully " );
}).catch((err) => {
    console.log(`MongoDB Connection Failed with Error : ${err}`);
})