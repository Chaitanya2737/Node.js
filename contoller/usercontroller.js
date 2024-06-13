const user = require('../model/user')
const handleGetData=  async( req,  res) =>{
  const alluser = await user.find({})
  return res.status(201).json(alluser)
}

module.exports =  {handleGetData}