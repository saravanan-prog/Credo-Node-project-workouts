import express from 'express'
const app = express() 
app.use(express.json())

import dotenv from 'dotenv'
dotenv.config()

import  MainRouter   from './src/routes/mainRoute.js'

/* Env file read data */
const PORT = process.env.PORT_NUMBER

/*Route middle-ware */
app.use('/',MainRouter)

app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)