const express = require("express")
const helmet = require("helmet")
const userRoutes = require("./routes/user")

const app = express()

app.use(helmet())
app.use("/user", userRoutes)

module.exports = app