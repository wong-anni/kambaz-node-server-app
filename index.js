//  index.js implements an HTTP server that responds Hello World! 
// when the server receives an HTTP request at the URL http://localhost:4000/hello.
import express from 'express'; 
import mongoose from "mongoose"; 

import Hello from "./hello.js"
import Lab5 from "./lab5/index.js"; 
import cors from "cors";
import db from "./kambaz/database/index.js"; 
import UserRoutes from "./kambaz/users/routes.js";
import session from "express-session"; 
import "dotenv/config";   
import CourseRoutes from "./kambaz/courses/routes.js"; 
import ModulesRoutes from './kambaz/modules/routes.js';
import AssignmentsRoutes from "./kambaz/assignments/routes.js";
import EnrollmentsRoutes from "./kambaz/enrollments/routes.js";


// referring to MongoDB server instance running in localhost machine, listening on port 27017, kambaz db existing in that server
const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"        
mongoose.connect(CONNECTION_STRING); 
// const express = require('express')                               // equivalent to import; refactored to use import instead of require()
const app = express()                                               // create new express instance  

// make sure cors is used right after creating the app express instance
app.use(cors({
  // support cookies
  credentials: true,        
  // restrict cross origin resource sharing to the react application                                
  origin: process.env.CLIENT_URL || "http://localhost:3000",  
}));

const sessionOptions = { 
  secret: process.env.SESSION_SECRET || "kambaz", 
  resave: false, 
  saveUninitialized: false, 
};
if (process.env.SERVER_ENV !== "development") { 
  sessionOptions.proxy = true; 
  sessionOptions.cookie = { 
    sameSite: "none", 
    secure: true, 
    domain: process.env.SERVER_URL, 
  }; 
} 
app.use(session(sessionOptions)); 

app.use(express.json());                                            // make sure this statement occurs AFTER setting up CORS but BEFORE all the routes

app.use(
  session({
    secret: "any secret string",
    resave: false,
    saveUninitialized: false,
  })
);

UserRoutes(app, db);
CourseRoutes(app, db); 
ModulesRoutes(app, db);
AssignmentsRoutes(app, db);
EnrollmentsRoutes(app, db);

Hello(app); 
Lab5(app);                                                          // pass reference to express module 

// app.get('/hello', (req, res) => {res.send('Hello World!')})      // create a route that responds 'hello' ...responds to the request with the text Hello World!

// Move to hello.js 
// app.get('/hello', (req, res) => {res.send('Life is good!')})        // http://localhost:4000/hello responds "Life is good" 
// app.get('/', (req, res) => { 
// res.send('Welcome to Full Stack Development!')})                    // http://localhost:4000 responds "Welcome to Full ..." 
app.listen(process.env.PORT || 4000)                                   // listen to uses the remote PORT environment variable if available, or port 4000 when running locally http://localhost:4000 


//app.get() function to configure an HTTP GET Request handler 
// by mapping the URL pattern '/hello' to a function that handles the HTTP request.