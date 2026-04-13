import mongoose from "mongoose"; 

const assignmentSchema = new mongoose.Schema({ 
    _id: String, 
    title: String, 
    course: String, 
    available: String,
    due: String, 
    points: Number,
    description: String,
    assignmentGroup: String,
    display: String,
    type: String,
    options: String,
    assign: String,
    until: String 
}, 
    { collection: "assignments" } 
); 
export default assignmentSchema;