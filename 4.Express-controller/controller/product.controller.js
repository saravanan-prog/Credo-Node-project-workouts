import products from '../json/products.json' with {type : "json"}

export const getAllProduct = (req,res) => {
    
    res.status(200).send(products)
}

export const addProduct =(req,res) => {
    products.push(req.body)
    res.status(201).send(products)
}

export const removeProduct = (req,res) => {
   const {id} = req.params
   const resp = products.filter(value=> value.id !=id)


   res.status(204).send(`${id} is removed from list`)
}