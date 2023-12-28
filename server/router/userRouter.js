
const express=require("express");
const router=express.Router();
const userControler=require('../controller/userControle');
const accessControl = require('../utils/accesscontrol').accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
       
        accessControl(access_type,req,res,next)
    }
}
router.post('/adduser',setAccessControl('*'),userControler.newUser);

module.exports=router
