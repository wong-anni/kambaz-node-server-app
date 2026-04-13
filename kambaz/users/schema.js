// load the mongoose library
import mongoose from "mongoose";

// create schema
const userSchema = new mongoose.Schema({ 
    _id: String,                                                // primary key name is _id of type String
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    firstName: String, 
    email: String, 
    lastName: String, 
    dob: Date, 
    role: { 
      type: String, 
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"], 
      default: "USER", 
    }, 
    loginId: String, 
    section: String, 
    lastActivity: Date, 
    totalActivity: String, 
  }, 
  { collection: "users" }                                         // store data in "users" collection
); 
export default userSchema; 