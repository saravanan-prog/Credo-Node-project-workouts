const products = [
    {
        productID:1,
        productName:"Apple"

    },
    {
        productID:2,
        productName:"Orange"

    },
    {
        productID:3,
        productName:"PineApple"

    }
]



export const getAllproductList = () => {
    return products
}

export const getSingleProdct = (id) => {
    return products.filter(value => value.productID === id )
}