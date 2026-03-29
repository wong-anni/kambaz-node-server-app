// console.log("Hello World!");    dont need this anymore 

// function accepts app reference to express module 
// to create routes here. We could have used the new 
// arrow function syntax instead 
export default function Hello(app) {
    // declare the callback functions on their own 
    // and then reference them in the route declarations 
    const sayHello = (req, res) => { 
        res.send("Life is good!"); 
    }; 
    const sayWelcome = (req, res) => { 
        res.send("Welcome to Full Stack Development!"); 
    }; 
    app.get("/hello", sayHello); 
    app.get("/", sayWelcome); 
  

    // commented out, 
    // since embedding the callback function declaration within the route definition can be a challenging syntax
    //
    // app.get('/hello', (req, res) => { 
    // res.send('Life is good!') 
    // }); 
    // app.get('/', (req, res) => { 
    // res.send('Welcome to Full Stack Development!') 
    // }); 
}
