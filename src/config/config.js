const dotenv = require("dotenv")

dotenv.config()

const ENV =process.env.NODE_ENV || "development"

const CONFIG ={
    development:{
        app:{
            PORT: process.env.PORT || 4000
        }
    },
    production:{}
}

module.exports = CONFIG[ENV]