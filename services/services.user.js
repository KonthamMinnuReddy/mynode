//sql queries
//importing db into services.user.js
const db= require('../db')

module.exports.getAllUsers =async()=> {
    
    const users= await db.query('SELECT * FROM public.crudoperations')
    return users
}