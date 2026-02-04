import users from "../data/users.js"

export const getAllUsers = (req,res)=>{

    res.status(200).json({
        message:"",
        data : users
    })

}
export const getUserById = (req,res)=>{
    
  const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if(!user)
    {
        res.status(404).json({
            message:"No user found "
        })
    }

    res.status(200).json({
        message: `fetched user with id = ${id}`,
        data:user
    })

}
