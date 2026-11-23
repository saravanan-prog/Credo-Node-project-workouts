import express from 'express'
import cors from 'cors'
import  productRoute  from './routes/product.route.js'

const app = express()
app.use(express.json())
 app.use(cors())




/* Routing */
app.use('/products',productRoute)




/* Error - Middleware */
app.use((req,res)=>{
    const response = {
        statusCode : 404,
        statusMessage: "Url not found"
    }

    res.status(400).send(response)
})


const Port = 8000
app.listen(Port,()=> console.log("Your Port is ready",Port))