import { getUsers,addUser } from '../module/UserModule.js'
 
export default  function Routes(req, method) {

    if(req.url ==="/" && req.method ==="GET"){
     let promise = new Promise((resolve,reject)=>{
        resolve("Success")
     })

     return promise
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
        })
        return promise
    }
   
}