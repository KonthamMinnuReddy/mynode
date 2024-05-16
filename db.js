const{Client} = require('pg')
const user='postgres'
const password='minnu03'
const host='localhost'
const database='ams'
const port=11517

const db=new Client({
    user,
    password,
    host,
    database,
    port
})
module.exports =db
