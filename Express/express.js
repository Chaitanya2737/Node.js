const express = require("express");

const app = express();

const user = require("./MOCK_DATA.json");

app.use(express.json());
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase").then(()=> console.log("db connected")).catch((e)=> console.log(e))


const userSchema = new mongoose.Schema({
  fName: {
    type : String,
    require: true
  },
  lName: {
    type : String,
    require: true
  }
})

const user1 = mongoose.model("users", userSchema)

app.post("/api/user", async (req, res) => {
  try {
    const reqdata = {
      fName: req.body.fname,
      lName: req.body.lname,
    };

    const result = await user1.create(reqdata); // Use User model to insert data
    return res.status(201).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/user" , (req, res) => {
  const html = `
    <ul>
    ${user.map((item) => item.first_name)}
    </ul>
    
    `;
  res.send(html);
});

app.get("/api/user", (req, res) => {
  return res.json(user);
});

app.get("/api/user/:id" ,(req , res)=>{
  const Id = Number(req.params.id);
  const userId = user.find((user)=> user.id ===Id)
   return res.json(userId)
})



app.listen(8000, () => {
  console.log("Server started");
});
