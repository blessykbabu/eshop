
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
router.post('/addproduct',setAccessControl('3'),userControler.newProduct);
router.post('/profile',setAccessControl('*'),userControler.Profile);
router.get('/fetch/products',setAccessControl('*'),userControler.Fetch_products);




module.exports=router
