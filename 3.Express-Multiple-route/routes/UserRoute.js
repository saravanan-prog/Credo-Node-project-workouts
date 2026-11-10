import express from 'express'
import users from '../json/User.json' with {type:"json"}
export const userRoute = express.Router()

userRoute.get("/",(req,res)=>{

    res.send(users)
})

userRoute.post("/add-user",(req,res)=>{

    console.log("req params====>",req.body)

    users.push(req?.body)
    res.send(users)
})

userRoute.get("/find-user/:id",(req,res)=>{
    
    const requestid = req.params.id

    const findUser = users.filter( (value) => value['customer_id'] == requestid  )

    console.log("findUser",findUser)

    
    res.send(findUser)
})