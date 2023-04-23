const app = require("./server")
const Config = require("./config/config")

app.listen(Config.app.PORT, ()=>{
    console.log("server is running on port" + Config.app.PORT);
})