import express from 'express'
import products from '../json/Product.json' with { type:"json"}

export const productRoute = express.Router()

productRoute.get('/',(req,res)=>{
    res.send(products)
})

productRoute.post('/add-product',(req,res)=>{
    res.send("product added success fully")
})