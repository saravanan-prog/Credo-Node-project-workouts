export default function Routes(req) {

    if (req.url === '/' && req.method === 'GET') {
        let promise = new Promise((resolve, reject) => {
            resolve("Welcome to node Js world")
        })
        return promise
    }

    if (req.url === '/add-user' && req.method === 'POST') {
        let promise = new Promise((resolve, reject) => {
            let body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (chunk) => {
                console.log("Body====>", body)
                let response = {
                    statusCode: 200,
                    statusMessage: "User Added Success",
                    data: [body]
                }
                resolve(response)
            })
        })
        return promise
    }

    if (req.url.startsWith('/update-user/') && req.method === 'PUT') {
        let promise = new Promise((resolve, reject) => {
            const paramId = req.url.split("/")[2]
            var body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (chunk) => {
                body = JSON.parse(body)
                let resonse = {
                    statuCode:200,
                    statusMessage: "updated successfully"
                }
                resolve(resonse)
            })


        })
        return promise
    }

   

    if(req.url.startsWith("/products/") && req.method === "DELETE"){
        const paramId = req.url.split('/')[2]
        const respone = {
            statusCode:200,
            statusMessage: `Record ${paramId} is deleted`
        }
        return respone
    }
}
