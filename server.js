// web server create

// importing express

const express = require("express");

const app = express()
const PORT=5000
const db=require('./db')
// use(route, function)

app.use(express.json())

app.get("/", (request, response) => {
    response.send("HI")
})

app.get("/myapp", (request,response) => {
     return response.send("Hello world")
})

// listen(port, function)
// funtion return server start or fail
db.connect().then(()=> console.log("Data base is connected"))
app.listen(PORT, () => {
    console.log("Running on port 5000")
})