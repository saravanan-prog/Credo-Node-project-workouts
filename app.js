import express from 'express'
import Router from './routes/MainRoute.js'

const app = express() 
const PORT = 8080
app.use(express.json())

app.use('/',Router)  


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)