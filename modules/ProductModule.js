import productData from '../json/product.json' with {type:"json"}

export const getAllProducts = () => {
    return productData
}

export const searchByPrice = (searchItem) => {
    return productData.filter((value)=> value.price <= searchItem )
}