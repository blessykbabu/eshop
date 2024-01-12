const users = require("../db/models/users.js");
const path=require("path");
const usertypes=require('../db/models/usertypes.js');
const carts=require("../db/models/cart.js");
const orders=require("../db/models/orders.js");
const products=require('../db/models/products.js');
const bcrypt=require('bcrypt');
const {
  successFunction,
  errorFunction,
} = require("../utils/response-handler.js");

const Regvalidator = require("../validation/RegValidator.js");
const jwt = require("jsonwebtoken");

const { sign } = jwt;

// **********For registration**********************

async function newUser(req, res) {
  try {
    let { name, email, phone, district,category,password } = req.body;
    let validationResult = await Regvalidator(req.body);
    if (validationResult.isValid) {
      let hashedPass = await bcrypt.hash(password, 10);

      let userExist = await users.findOne({
        $and: [{ email: email }, { deleted: { $ne: true } }],
      });
      
      if (userExist) {
        let response = errorFunction({
          statusCode: 401,
          message: "user already exist",
        });
        return res.status(401).send(response);
      }
     if(category == "Buyer"){
       var usertype="6582ce130a0dd1bc7fe48dad"
     }
     else{
      var usertype="6598dd77f3261b14b25ff389"
     }
      let result = await users.create({
        name,
        email,
        phone,
        district,
        category,
        usertype:usertype,
        password:hashedPass,
      });
      if (result) {
        let response = successFunction({
          statusCode: 200,
          data: result,
          message: "Registration successful",
        });
        return res.status(200).send(response);
      } else {
        let response = errorFunction({
          statusCode: 400,
          message: "Registration Failed",
        });
        return res.status(400).send(response);
      }
    } else {
      let response = errorFunction({
        statusCode: 500,
        message: "validation failed",
      });
      response.error = validationResult.errors;
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}


async function newProduct(req, res) {
  try {
    // console.log("reqst body:",req.body);
    let { name, category,price, quantity,description,pimage } = req.body;
   

    

     
      let result = await products.create({
        name,
        category,
        price,
        quantity,
        description,
        pimage
      });
      if (result) {
        let response = successFunction({
          statusCode: 200,
          data: result,
          message: "Product add successful",
        });
        return res.status(200).send(response);
      } else {
        let response = errorFunction({
          statusCode: 400,
          message: " Failed",
        });
        return res.status(400).send(response);
      }
    
  } catch (error) {
    console.log(error);
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}
async function Fetch_products(req,res){
  try {
    let count = Number(await products.countDocuments({ deleted: { $ne: true } }));
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || count;
    let info = await products
      .find({ deleted: { $ne: true } })
      .sort({ _id: -1 })
      .skip(pageSize * (pageNumber - 1))
      .limit(pageSize);

    // return res.json(info);
    if (info) {
      let total_pages = Math.ceil(count / pageSize);
      let data = {
        count: count,
        total_pages: total_pages,
        currentPages: pageNumber,
        datas: info,
      };
      let response = successFunction({
        statusCode: 200,
        data: data,
        message: "Products Details Recieved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "Data not found",
      });
      return res.status(404).send(response);
    }
  } catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
      statusCode: 500,
      message: "Error occured",
    });
    return res.status(500).send(response);
  }
}

async function FetchOne_Product(req,res){

try {
    let id = req.params.id;
    // console.log(id);
   
    let result = await products
      .findOne({
        $and: [{ _id: id }, { deleted: { $ne: true } }],
      })
     

 
    if (result) {
      let response = successFunction({
        statusCode: 200,
        data: result,
        message: "Product Recieaved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "Product not found",
      });
      return res.status(404).send(response);
    }

  } catch (error) {
    console.log(error);

    let response = errorFunction({
      statusCode: 404,
      message: "Product not found",
    });
    return res.status(404).send(response);
  }
}



async function addCart(req, res) {
  try {
    console.log("reached the cart  controller");
    // console.log("reqst body:",req.body);
    let pid = req.query.pid;
    let uid=req.query.uid;
    console.log("user id:",uid)
    // let pid=req.query._id;
    console.log("pid",pid);

    // let validationResult = await Productvalidator(req.body);
    // console.log("valiadtionResult::", validationResult);
  
      let result = await carts.create({
        pid:pid,
        uid:uid
       
      });
      if (result) {
        let response = successFunction({
          statusCode: 200,
          data: result,
          message: "Product add successful",
        });
        return res.status(200).send(response);
      } else {
        let response = errorFunction({
          statusCode: 400,
          message: " Failed",
        });
        return res.status(400).send(response);
      }
  
  } catch (error) {
    console.log(error);
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}
async function userProfile(req,res){
 
  try {
    // console.log("reached the userprofile")
    let user = req.user;
    // console.log("user:",user)
    let userDetails = await users.findOne({ _id: user.user_id },{ password: 0 });
    // console.log("userdetails:",userDetails)
    if (userDetails) {
      let response = successFunction({
        statusCode: 200,
        data: userDetails,
        message: "user data Recieaved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "user not found",
      });
      return res.status(404).send(response);
    }

  } catch (error) {
    console.log(error);

    let response = errorFunction({
      statusCode: 404,
      message: "user not found",
    });
    return res.status(404).send(response);
  }
}

async function addOrder(req, res) {
  try {
    console.log("reached the order  controller");
    // console.log("reqst body:",req.body);
    let pid = req.query.pid;
    let uid=req.query.uid;
    console.log("user id:",uid)
    // let pid=req.query._id;
    console.log("pid",pid);

    // let validationResult = await Productvalidator(req.body);
    // console.log("valiadtionResult::", validationResult);
  
      let result = await orders.create({
        pid:pid,
        uid:uid
       
      });
      if (result) {
        let response = successFunction({
          statusCode: 200,
          data: result,
          message: "order confirmed",
        });
        return res.status(200).send(response);
      } else {
        let response = errorFunction({
          statusCode: 400,
          message: " Failed",
        });
        return res.status(400).send(response);
      }
  
  } catch (error) {
    console.log(error);
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}

async function fetchOrder(req,res){
  try {
    // console.log("reach fetch order");
      let uid=req.params.id;
      // console.log("uid in fetch-order controler:",uid)
    let result = await orders
      .find({
        $and: [{ uid }, { deleted: { $ne: true } }],
      })
      .populate('pid')
    //  console.log('cart result',result)

 
    if (result) {
      let response = successFunction({
        statusCode: 200,
        data: result,
        message: "Product Recieaved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "Product not found",
      });
      return res.status(404).send(response);
    }

  } catch (error) {
    console.log(error);

    let response = errorFunction({
      statusCode: 404,
      message: "Product not found",
    });
    return res.status(404).send(response);
  }
}




module.exports={
newUser,
newProduct,
userProfile,
Fetch_products,
FetchOne_Product,
addCart,
addOrder,
fetchOrder,
}