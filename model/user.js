const mongoose =  require("mongoose")

const userSChema =  mongoose.Schema({
    First_Name :{
        type:String,
        required : true
    },
    Last_name:{
        type:String,
        required : true
    },
    email : {
        type : String
    },
    jobTitle:{
        type :String
    },
    gender:{
        type : String
    }
})

module.exports =  mongoose.model("users" ,  userSChema)