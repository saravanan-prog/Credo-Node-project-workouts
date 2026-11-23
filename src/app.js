import express from 'express'
const app = express() 
app.use(express.json())

import dotenv from 'dotenv'
dotenv.config()


const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hello i am express js")
})


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)