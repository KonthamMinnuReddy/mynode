// web server create

// importing express

const express = require("express");

const app = express()


const PORT=5000

//import body-parse

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
       
        extended: true,
    })
)
const db=require('./db')
//importing controllers router
const routes= require('./controllers/controller.user')
// use(route, function)
app.use('/api',routes)
app.use(express.json())

// listen(port, function)
// funtion return server start or fail
db.connect().then(()=> console.log("Data base is connected"))
app.listen(PORT, () => {
    console.log("Running on port 5000")
})