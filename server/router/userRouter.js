
const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth")
const userControler=require('../controller/userControle');
const accessControl = require('../utils/accesscontrol').accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
       
        accessControl(access_type,req,res,next)
    }
}
router.post('/adduser',setAccessControl('*'),userControler.newUser);
router.post('/addproduct',setAccessControl('3'),userControler.newProduct);
router.get('/fetch/products',setAccessControl('*'),userControler.Fetch_products);
router.get('/order/product/:id',setAccessControl('*'),userControler.FetchOne_Product);
router.post('/add/cart',setAccessControl('*'),userControler.addCart);
router.get('/user/profile',setAccessControl('*'),auth,userControler.userProfile)
router.post('/add/order',setAccessControl('*'),userControler.addOrder);
router.get('/fetch/order/:id',setAccessControl('*'),userControler.fetchOrder);




module.exports=router
