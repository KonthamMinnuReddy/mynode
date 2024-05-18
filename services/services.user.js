//sql queries
//importing db into services.user.js
const db= require('../db')

module.exports.getAllUsers =async()=> {
    
    const users= await db.query('SELECT * FROM public.crudoperations')
    return users
}
module.exports.createUser =async(data)=>{
    const user =await db.query('INSERT INTO public.crudoperations(name,age,profession) VALUES ($1,$2,$3)',[data.name,data.age,data.profession])
    return user
}