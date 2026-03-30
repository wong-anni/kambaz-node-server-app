import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) { 

function updateModule(moduleId, moduleUpdates) { 
  const { modules } = db; 
  const module = modules.find((module) => module._id === moduleId); 
  Object.assign(module, moduleUpdates); 
  return module; 
} 

function deleteModule(moduleId) { 
  const { modules } = db; 
  db.modules = modules.filter((module) => module._id !== moduleId); 
} 

 function createModule(module) { 
  const newModule = { ...module, _id: uuidv4() }; 
  if (!db.modules) db.modules = [];
  db.modules = [...db.modules, newModule]; 
  return newModule; 
} 

 function findModulesForCourse(courseId) { 
   const { modules } = db; 
   return modules.filter((module) => String(module.course) === String(courseId)); 
 } 
 return { 
   findModulesForCourse, 
   createModule, 
   deleteModule, 
   updateModule
 }; 
} 