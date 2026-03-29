let todos = [ 
  { id: 1, title: "Task 1", completed: false, description: "one" }, 
  { id: 2, title: "Task 2", completed: true, description: "two" }, 
  { id: 3, title: "Task 3", completed: false, description:"three" }, 
  { id: 4, title: "Task 4", completed: true, description: "four" }, 
]; 
export default function WorkingWithArrays(app) { 
  // callback functions 
  const getTodos = (req, res) => { 
    const { completed } = req.query; 
    if (completed !== undefined) { 
      const completedBool = completed === "true"; 
      const completedTodos = todos.filter((t) => t.completed === completedBool); 
      res.json(completedTodos); 
      return; 
    } 
    res.json(todos); 
  }; 


  const createNewTodo = (req, res) => { 
    const newTodo = { 
      id: new Date().getTime(), 
      title: "New Task", 
      completed: false, 
    }; 
    todos.push(newTodo); 
    res.json(todos); 
  };
  // instead of createToDo using Get HTTP Method verb, using the proper verb (POST)
  const postNewTodo = (req, res) => { 
    const newTodo = { ...req.body, id: new Date().getTime() }; // use JSON data from req.body 
    todos.push(newTodo); 
    res.json(newTodo); // instead of responding with entire todo array, just respond with new todo object instance 
  }; 


  const getTodoById = (req, res) => { 
    const { id } = req.params; 
    const todo = todos.find((t) => t.id === parseInt(id)); 
    res.json(todo); 
  }; 


  const removeTodo = (req, res) => { 
    const { id } = req.params; 
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); 
    todos.splice(todoIndex, 1); 
    res.json(todos); 
  };
  // instead of removeTodo using Get HTTP Method verb, use proper verb (DELETE)
  const deleteTodo = (req, res) => { 
    const { id } = req.params; 
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); 
    // handles errors
    if (todoIndex === -1) { 
      res.status(404).json({ message: `Unable to delete Todo with ID ${id}` }); 
      return; 
    } 
    todos.splice(todoIndex, 1); 
    res.sendStatus(200); 
  }; 
  
  const updateTodoTitle = (req, res) => { 
    const { id, title } = req.params; 
    const todo = todos.find((t) => t.id === parseInt(id)); 
    todo.title = title; 
    res.json(todos); 
  }; 
  const updateTodoDescription = (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.description = description;
    res.json(todos);
  }
  const updateTodoCompleted = (req, res) => {
    const { id, newCompleted } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.completed = newCompleted === "true";
    res.json(todos);
  }

  // HTTP PUT to reimplement the route that updates an item in an array
  const updateTodo = (req, res) => { 
    const { id } = req.params; 
    // handles error
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id)); 
    if (todoIndex === -1) { 
      res.status(404).json({ message: `Unable to update Todo with ID ${id}` }); 
      return; 
    } 
    todos = todos.map((t) => { 
      if (t.id === parseInt(id)) { 
        return { ...t, ...req.body }; 
      } 
      return t; 
    }); 
    res.sendStatus(200); 
  }; 
  app.put("/lab5/todos/:id", updateTodo);
  

  // route declarations 
  app.get("/lab5/todos/:id/delete", removeTodo);
  app.delete("/lab5/todos/:id", deleteTodo); 

  app.get("/lab5/todos", getTodos); 
  
  app.get("/lab5/todos/create", createNewTodo);      // make sure to implement this BEFORE the /lab5/todos/:id 
  app.post("/lab5/todos", postNewTodo); 

  app.get("/lab5/todos/:id", getTodoById); 
  app.get("/lab5/todos/:id/title/:title", updateTodoTitle);

  app.get("/lab5/todos/:id/description/:description", updateTodoDescription);
  app.get("/lab5/todos/:id/completed/:newCompleted", updateTodoCompleted);
}; 