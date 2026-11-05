import { getUsers,addUser } from '../module/UserModule.js'
 
export default  function Routes(req, method) {

    if(req.url ==="/" && req.method ==="GET"){
     let promise = new Promise((resolve,reject)=>{
        let response = {
            statusCode:200,
            message:"Welcome to Node Js world"
        }
        resolve(response)
        return promise
     })

    
    }

    if(req.url ==="/users" && req.method ==="GET"){
     let promise = new Promise((resolve,reject)=>{
        let response = [
            {
            "address": {
                "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
            }
        ]
        resolve(response)
        return promise
     })

     
    }

    if(req.url ==='/add-user' && req.method==='POST'){

        let promise = new Promise((resolve,reject)=>{
            let body = ""
            req.on('data',(chunk)=>{
                body += chunk
            })
            req.on("end",(chunk)=>{
                let data = addUser(body)
                let responseData = {
                    statusCode : 200,
                    statusMessage: "success",
                    data : data
                } 
                resolve(responseData)
            })
             return promise
        })
       
    }
   
}