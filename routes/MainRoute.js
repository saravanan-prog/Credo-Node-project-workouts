import express from 'express'
export const Router =  express.Router()





Router.get("/",(req,res)=>{
    res.send("Main route reached")
})

Router.get('/user/:id',(req,res)=>{
   
    const {id,name} = req.params
    
    res.send("Parameterized Route")
})

Router.get('/user/:id/:name',(req,res)=>{
   
    const {id,name} = req.params

    console.log("id====>",id)
    
    res.send("Parameterized route")
})