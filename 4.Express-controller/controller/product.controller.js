
export const getAllProduct = (req,res) => {
    console.log("get all product is working....")
    console.log("creted by Saravanan")
    res.send("Product controller is working")
}

export const addProduct =(req,res) => {
    res.send(req.body)
}