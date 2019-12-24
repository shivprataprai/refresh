const express = require('express')
const app = express()
const config = require("./config")
app.get('/',(req,res)=>{
    res.send(config)
})
app.listen(config.PORT,()=>console.log('server started '+config.PORT))