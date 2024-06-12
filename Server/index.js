const http = require("http");
const file = require("fs")
const myServer=  http.createServer(
    (req , res)=> {
        console.log("new request receive")
        const date = new Date()
        console.log()
        file.appendFile("./log.txt" ,date.toDateString(), ()=>{} )
        res.end("hello from server")
    }
);

myServer.listen(8000 , () =>{
    console.log("server started")
})