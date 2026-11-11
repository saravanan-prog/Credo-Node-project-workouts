import express from 'express'
import  productRoute  from './routes/product.route.js'

const app = express()
app.use(express.json())


/* Routing */
app.use('/products',productRoute)


const Port = 8000
app.listen(Port,()=> console.log("Your Port is ready",Port))