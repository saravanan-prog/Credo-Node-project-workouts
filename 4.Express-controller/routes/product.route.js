import express from 'express'
import { getAllProduct,addProduct ,removeProduct} from '../controller/product.controller.js'

const  productRoute = express.Router()

productRoute.get('/',getAllProduct)
productRoute.post('/add-product',addProduct)
productRoute.delete('/remove-product/:id',removeProduct)


export default  productRoute