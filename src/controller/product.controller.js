import {getAllProductService } from '../services/product.service.js'
export const getAllProducts = async (req,res) => {

    const products = await  getAllProductService()

    res.send(
        {
            statusCode : 200,
            statusMessage:"success",
            data : products
        }
    )
}