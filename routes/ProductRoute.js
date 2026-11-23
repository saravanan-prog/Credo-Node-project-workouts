import express from 'express'
import products from '../json/Product.json' with { type:"json"}

export const productRoute = express.Router()



productRoute.get('/',(req,res)=>{
    res.send(products)
})



productRoute.post('/add-product',(req,res)=>{

    console.log("req body ===>",req.body)

    res.send("product added success fully")
})



/* http://localhost:8000/products/find-product?id=101&productname=apple */

productRoute.get('/find-product',(req,res)=>{

    const {id,productname} = req.query

    console.log("id====>",id)
    console.log("productname====>",productname)


    res.send("Querparams analysis")
})



/*  http:localhost:8000/product/find-product/101/apple  */
productRoute.get('/find-product/:id/:name',(req,res)=>{
   
    const {id,name} = req.params

    console.log("id====>",id,"name====>",name)
    
    res.send("product added success fully")
})