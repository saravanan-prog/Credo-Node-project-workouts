import { getCustomerList } from "./modules/customers.module.js"
import { getAllproductList,getSingleProdct } from "./modules/product.module.js"

const customerList = getCustomerList()
const productsList =  getAllproductList()
const thridProdct = getSingleProdct(3)

console.log("Customer list ====>",customerList)
console.log("Product list ====>",productsList)
console.log("Third Product ====>",thridProdct)



