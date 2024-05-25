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
module.exports.getUser = async(name) => {
    const user = await db.query ("SELECT * FROM public.crudoperations WHERE name = $1", [name])
    return user
}

module.exports.updateUser = async(name,data) => {
    const user = await db.query("UPDATE public.crudoperations SET name = $1, age = $2, profession = $3 WHERE name = $4", [data.name, data.age, data.profession, name])
    return user
}

module.exports.deleteUser = async(name) => {
    const user = await db.query("DELETE FROM public.crudoperations WHERE name = $1",[name])

    return user
}
