import express from 'express'

export const mainRouter = express.Router()

mainRouter.get("/",(req,res)=>{
    res.send("Main route get calling....")
})

/* Route :: Query Pram  */
mainRouter.get("/cartItem",(req,res)=>{
    console.log("query params ======>",req.query)
    res.send(req.query)
})

/* Route :: Parameterized route  */
mainRouter.get("/cartItem/:name",(req,res)=>{
    console.log(" params ======>",req.params)
    res.send(req.params)
})


/* Route :: Post method Read body */
mainRouter.post("/",(req,res)=>{
    console.log("req======>",req.body)
    res.send("Post method working")
})

mainRouter.put("/",(req,res)=>{
    res.send("put  method working")
})

mainRouter.patch("/",(req,res)=>{
    res.send("patch  method working")
})

mainRouter.delete("/cartItem/:id",(req,res)=>{
    res.send("delete  method working")
})