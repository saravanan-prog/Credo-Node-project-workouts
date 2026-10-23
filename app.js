import {RegisterCustomer,login} from './route/customerRoute.js'

 const customerPayload = {
    name: "Sudheesh",
    age : 25,
    work: "TCS",
    place: "chennai",
    email : "sudheesh@gmail.com",
    password:"Test@123"
}



const loginPayload = {
    email : "bala@gmail.com",
    password:"Test@123"
}


const loginResponse = login(loginPayload)

console.log("LoginResponse========>",loginResponse)