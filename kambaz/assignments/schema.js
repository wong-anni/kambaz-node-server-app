import mongoose from "mongoose"; 

const assignmentSchema = new mongoose.Schema({ 
    _id: String, 
    title: String, 
    course: String, 
    available: String,
    due: String, 
    points: Number,
    description: String,
    assignmentGroup: { 
      type: String, 
      enum: ["ASSIGNMENTS", "A1", "A2", "A3"], 
      default: "ASSIGNMENTS", 
    }, 
    display: { 
      type: String, 
      enum: ["Percentage", "Fraction", "Letter", "Integer"], 
      default: "Percentage", 
    }, 
    type: { 
      type: String, 
      enum: ["Online", "Paper"], 
      default: "Online", 
    }, 
    options: { 
      type: String, 
      enum: ["Text Entry", "Website URL", "Media Recordings", "Student Annotation","File Upload"], 
      default: "Text Entry", 
    }, 
    assign: { 
      type: String, 
      enum: ["Everyone"], 
      default: "Everyone", 
    }, 
    until: String 
}, 
    { collection: "assignments" } 
); 
export default assignmentSchema;