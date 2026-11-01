export default function  Routes(req) {

    if(req.url === '/' && req.method ==='GET'){
        let promise = new Promise((resolve,reject)=>{
            resolve("Welcome to node Js world")
        })
        return promise
    }

    if(req.url === '/add-user' && req.method ==='POST'){
        let promise = new Promise((resolve,reject)=>{
            let body = ''
            req.on('data',(chunk)=> {
                body += chunk
            })
            req.on('end',(chunk)=>{
                let response = {
                    statusCode : 200,
                    statusMessage: "Success",
                    data: body
                }
                resolve(response)
            })
        })
        return promise 
    }
}