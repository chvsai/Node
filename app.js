const fs = require('fs')
const http = require('http')

// console log and application initial setup check

const welcome_text = "Hello"
console.log(welcome_text)

// create simple server

const server = http.createServer((req,res) => {
    console.log(req)
res.end("hello from server")
})

server.listen(8000,"127.0.0.1",()=>{
    
    console.log("listening for requests")
})

