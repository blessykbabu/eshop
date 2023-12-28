const users = require("../db/models/users.js");

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
    let { name, email, phone, district,category } = req.body;
    let validationResult = await Regvalidator(req.body);
    console.log("valiadtionResult::", validationResult);
    if (validationResult.isValid) {
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
     
      let result = await users.create({
        name,
        email,
        phone,
        district,
        category,
        password,
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

module.exports={
newUser
}