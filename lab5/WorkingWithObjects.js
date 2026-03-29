// assignment object
const assignment = { 
    id: 1, title: "NodeJS Assignment", 
    description: "Create a NodeJS server with ExpressJS", 
    due: "2021-10-10", completed: false, score: 0, 
}; 
// module object
const module = { 
    id: 1, 
    name: "Web Development", 
    description: "Create a full-stack web application", 
    course: "CS4450",
};

export default function WorkingWithObjects(app) { 
    const getAssignment = (req, res) => { 
        res.json(assignment); 
    }; 
    const getAssignmentTitle = (req, res) => { 
        res.json(assignment.title); 
    }; 
    const setAssignmentTitle = (req, res) => { 
        const { newTitle } = req.params;            // changes to objects in the server
        assignment.title = newTitle;                // persist as long as the server is running
        res.json(assignment);                       // rebooting the server resets the object state
    }; 
    const setAssignmentScore = (req, res) => { 
        const { newScore } = req.params;            
        assignment.score = parseInt(newScore);                
        res.json(assignment);                      
    }; 
    const setAssignmentCompleted = (req, res) => { 
        const { newCompleted } = req.params;            
        assignment.completed = newCompleted === "true";                
        res.json(assignment);                      
    }; 

    const getModule = (req, res) => { 
        res.json(module); 
    };
    const getModuleName = (req, res) => { 
        res.json(module.name); 
    };
    const setModuleName = (req, res) => { 
        const { newName } = req.params;            
        module.name = newName;                
        res.json(module);                       
    }; 
    const setModuleDescription = (req, res) => { 
        const { newDescription } = req.params;            
        module.description = newDescription;                
        res.json(module);                       
    }; 

    // a bunch of routes
    app.get("/lab5/assignment", getAssignment); 
    app.get("/lab5/assignment/title", getAssignmentTitle);
    app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
    app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
    app.get("/lab5/assignment/completed/:newCompleted", setAssignmentCompleted);

    // a route that responds with the module object, mapped to /lab5/module
    app.get("/lab5/module", getModule); 
    app.get("/lab5/module/name", getModuleName);
    app.get("/lab5/module/name/:newName", setModuleName);
    app.get("/lab5/module/description/:newDescription", setModuleDescription);
}; 

// object state persists as long 
// as server is running 
// changes to the object persist 
// rebooting server 
// resets the object 
 
 
// use .json() instead of .send() if you know 
// the response is formatted as JSON 