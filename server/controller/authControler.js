const users=require('../db/models/users.js');
const successFunction = require("../utils/response-handler.js").successFunction;
const errorFunction = require("../utils/response-handler.js").errorFunction;
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const revokeManager=require('../manager/revokeManager.js')
const { sign } = jwt;



exports.login = async function (req, res) {
    try {
      console.log("Request Body:", req.body);
  
      let email=req.body.email;
      let password=req.body.password;
      // let {email,password}=req.body;
      // console.log("email and password:",email,password)
  
      if(email && password){
        let user=await users.findOne({
          $and:[{email:email}],
        })
        .populate("usertype")
        // console.log("email:",email)
        // console.log("usertype:",usertype)
      
        // let user = await users.findOne({ email:email }).populate("usertype");
        
        // console.log("user",user)
        
  // let user = await users.findOne({ email }).populate('usertype');
      //  console.log("user", user);
  
        if(!user){
          let response=errorFunction({statusCode:400,message:"User not found"})
          res.status(response.statusCode).send(response)
          return;
        }
        let usertype=user.usertype.usertype;
        if(user){
          bcrypt.compare(password,user.password,async(error,auth)=>{
            
            console.log("password",password);
            console.log("user.password",user.password);
            console.log("auth",auth);
            if(auth===true){
              let access_token=jwt.sign(
                { username: user.name,
                  user_id:user._id},
                process.env.PRIVATE_KEY,
                {expiresIn:"10d"}
              );
            let response=successFunction({
              statusCode:200,
              data:access_token,
              message:"Login successfull",
            });
            response.usertype=usertype;
            res.status(response.statusCode).send(response);
            return;
            
          }else{
            let response=errorFunction({
              statusCode:401,
              message:"Invalid credentials"
            });
            res.status(response.statusCode).send(response);
            return;
          }
        })
        }else{
          let response=errorFunction({
            statusCode:401,
            message:"Invalid credentials"
          });
          res.status(response.statusCode).send(response);
          return;
        }
          }else{
            if(!email){
              let response=errorFunction({
                statusCode:422,
                message:"Email is required",
              });
              res.status(response.statusCode).send(response);
              return;
            }
            if(!password){
              let response=errorFunction({
                statusCode:422,
                message:"Password is required",
              });
              res.status(response.statusCode).send(response)
              return;
            }
          }
       
    } catch (error) {
      if(process.env.NODE_ENV=="production"){
        let response=errorFunction({
          statusCode:400,
          message:error
          ?error.message 
             ?error.message
             :error
          :"Something went wrong"
        });
        res.status(response.statusCode).send(response)
        return;
      }else{
        let response=errorFunction({statusCode:400,message:error});
        res.status(response.statusCode).send(response)
        return;
      }
    }
  }

  exports.checkRevoked = function (req, res) {
    return new Promise((resolve, reject) => {
      try {
        const authHeader = req.headers["authorization"];
  
        if (!authHeader) {
          throw new Error("Authorization header is missing");
        }
  
        const token = authHeader.split(" ")[1];
  
        if (!token) {
          throw new Error("Token is missing in the Authorization header");
        }
  
        console.log("Token:", token);
  
        revokeManager
          .checkRevoked(token)
          .then((message) => {
            console.log("Check Revoked Result:", message);
            resolve(message);
          })
          .catch((error) => {
            console.error("Check Revoked Error:", error);
            reject(error);
          });
      } catch (error) {
        console.error("Synchronous Error:", error);
        reject(error);
      }
    });
  };
  
  

  exports.logout = async function (req, res) {
    try {
      console.log("reached the logoutt");
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(" ")[1];
      if (!token) {
        let response = errorFunction({
          statusCode: 400,
          message: "Token is required",
        });
        res.status(response.statusCode).send(response);
        return;
      }
  
      let isRevoked = await revokeManager.checkRevoked(token);
      //console.log("isRevoked : ", isRevoked);
      if (!isRevoked) {
        revokeManager.revoke(token)
          .then((result) => {
            let response = successFunction(result);
            res.status(result.status).send(response);
            return;
          })
          .catch((error) => {
            let response = errorFunction(error);
            res.status(error.status).send(response);
            return;
          });
      } else {
        //console.log("Token already in revoked list");
        res.status(406).send(
          errorFunction({
            statusCode: 406,
            message: "Token already in revoked list",
          })
        );
      }
    } catch (error) {
      if (process.env.NODE_ENV == "production") {
        let response = errorFunction({
          statusCode: 400,
          message: error
            ? error.message
              ? error.message
              : error
            : "Something went wrong",
        });
  
        res.status(response.statusCode).send(response);
        return;
      } else {
        let response = errorFunction({ statusCode: 400, message: error });
        res.status(response.statusCode).send(response);
        return;
      }
    }
  };
  
