import products from '../model/product.model.json' with {type:"json"}


export const getAllProductService = async () => {
    const productList  = await products
    return (productList && productList.length > 1) ? productList : []
}