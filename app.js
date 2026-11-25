import express from 'express'
const app = express() 
app.use(express.json())

import dotenv from 'dotenv'
dotenv.config()


/* Env file read data */
const port = process.env.PORT_NUMBER
const database  = process.env.DATABASE
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const author =  process.env.PROJECT_AUTHOR
const app_name = process.env.APP_NAME


/*Basic Route */
app.get("/app-details",(req,res)=>{

    const responseData  = {
        port: port,
        database : database,
        author : author,
        app_name: app_name

    }

    res.status(200).json(responseData)
})


app.listen(port,
    ()=> console.log("Your port is ready===>",port)
)