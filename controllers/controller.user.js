//routes =>we will write requests here

const express= require('express')

const router= express.Router()

//importing services.user.js

const services=require('../services/services.user')
router.get('/',async(req,res)=>{
    const users= await services.getAllUsers()
    res.send(users.rows)
})
//post request
router.post('/createuser',async(req,res)=>{

    const data =req.body

   // console.log(data);
    const user =await services.createUser(data)
    res.json({message:"user added succesfully"})
})
module.exports = router