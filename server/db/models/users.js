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

    category: {
      type: String,
    },

   
    password: {
      type: String
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
