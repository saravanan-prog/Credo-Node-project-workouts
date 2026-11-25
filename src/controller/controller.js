
export const mainPage = ((req,res)=>{

    res.send({
        statusCode : "200",
        statusMessage:"Success",
        data:"Main paga is reached"
    })
})