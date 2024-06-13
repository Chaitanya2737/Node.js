const express =  require("express")
 const router =  express.Router();
 const { handleGetData} =  require("../contoller/usercontroller")

 router.get('/' , handleGetData)
 module.exports =  router