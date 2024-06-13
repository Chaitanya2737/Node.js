const express = require('express')
const app = express()
const port = 3000
const mongoose =  require("./conection")

const userRoute =  require('./route/user')

app.use("/api/user" ,userRoute );


app.listen(port, () => console.log(`Example app listening on port ${port}!`))