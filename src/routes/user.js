const userRouter = require("express").Router()
const {signUp} = require("../controllers/user")

userRouter.get("/signup", signUp)

module.exports = userRouter