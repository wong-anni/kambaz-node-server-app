//  index.js implements an HTTP server that responds Hello World! 
// when the server receives an HTTP request at the URL http://localhost:4000/hello.
import express from 'express'; 
import Hello from "./hello.js"
import Lab5 from "./lab5/index.js"; 
import cors from "cors";

// const express = require('express')                               // equivalent to import; refactored to use import instead of require()
const app = express()                                               // create new express instance 
app.use(cors());                                                    // make sure cors is used right after creating the app express instance

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