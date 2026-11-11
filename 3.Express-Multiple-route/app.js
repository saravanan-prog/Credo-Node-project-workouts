import express from 'express'
import { mainRouter } from './routes/MainRoute.js'
import { productRoute } from './routes/ProductRoute.js'
import { userRoute } from './routes/UserRoute.js'

const app = express()
app.use(express.json())

/*route calling  */
app.use("/",mainRouter)
app.use("/products",productRoute)
app.use('/users',userRoute)


const PORT = 8000
app.listen(PORT,() =>  console.log("Your port is Ready",PORT))