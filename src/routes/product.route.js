import express from 'express'
import {
    getAllProducts,
    addProduct
} from "../controller/product.controller.js"

const productRoute = express.Router()

productRoute.get('/products',getAllProducts)
productRoute.post('/add-product',addProduct)

export default productRoute