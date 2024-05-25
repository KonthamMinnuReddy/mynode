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
router.post('/createUser',async(req,res)=>{

    const data =req.body
    console.log(data);
    const user =await services.createUser(data)
    res.json({message:"user added succesfully"})


     
}) 
router.get("/user/:name/", async(request, response)=> {
    const name = request.params.name
    const user = await services.getUser(name)
    response.send(user.rows)

})

router.put("/updateuser/:name", async(request, response) => {
    const name = request.params.name
    const data = request.body
    const updateduser = await services.updateUser(name, data)
    response.json({message:"User is updated"})
})


router.delete("/deleteuser/:name", async(request, response) => {
    const name = request.params.name
    // const data = request.body
    const deleteduser = await services.deleteUser(name)

    response.json({message:`${name} is Deleted successfully`})
})


module.exports = router