const express =  require("express")

const app =  express();

const user = require("./MOCK_DATA.json");


app.get("/user" , (req ,  res)=> {
    const html = `
    <ul>
    ${user.map((item)=> (item.first_name))}
    </ul>
    
    `
    res.send(html)
    })
    
    app.get("api/user" ,  (req , res)=>{
        return res.json(user)
    })
app.listen(8000, () =>{
    console.log("Server started")
})