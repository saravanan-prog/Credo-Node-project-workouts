import EventEmitter from 'events'

export const prdouctEvent =  new EventEmitter()


prdouctEvent.on("product",()=>{
    console.log("Product is created")
})

prdouctEvent.on("product",()=>{
    console.log("Product is view")
})


prdouctEvent.on("product",()=>{
    console.log("Product is deleted")
})


