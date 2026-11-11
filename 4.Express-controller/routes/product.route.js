import express from 'express'
import { getAllProduct,addProduct } from '../controller/product.controller.js'

const  productRoute = express.Router()

productRoute.get('/',getAllProduct)
productRoute.post('/',addProduct)

export default  productRoute