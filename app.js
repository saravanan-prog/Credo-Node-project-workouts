import express from 'express'
import dotenv from 'dotenv'

import productRoute from './src/routes/product.route.js'

/* bulit in Middle ware */
const app =  express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/* Thid party middle ware */
dotenv.config()


/* Read Environment Variables */
const PORT = process.env.PORT_NUMBER



/* Router middlewares  */
app.use("/products",productRoute)


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)