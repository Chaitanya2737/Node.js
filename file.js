const file =  require("fs");

file.writeFile("./text.txt" , "hello world" ,  () => {})

file.readFile("./contact.js" ,  "utf-8" , (error ,  result) =>{
    console.log(result)
})


file.mkdir("./Express"  , ()=>{})

file.writeFile("./Express/express.js" , "" , (e)=>{
console.log(e)
})