import express from 'express'
import { appRouter } from './routes/MainRoute.js'

const app = express() 
const PORT = 8080

app.use(express.json())

appRouter.use('/',appRouter)  //middle-ware


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)