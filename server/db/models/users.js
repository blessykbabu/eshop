// // import mongoose from "mongoose";
const mongoose = require("mongoose");
const users = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    district: {
      type: String,
    },
   
    password: {
      type: String
    },
    usertype: { 
      type: mongoose.Schema.Types.ObjectId,
       ref: "usertypes"
       },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", users);
