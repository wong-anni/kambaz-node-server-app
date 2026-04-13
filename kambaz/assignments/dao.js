import { v4 as uuidv4 } from "uuid"; 
import model from "./model.js"; 

export default function AssignmentsDao() {

  async function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return await model.create(newAssignment);
  }

  async function findAssignmentsForCourse(courseId) {
    // const { assignments } = db;
    // return assignments.filter((assignment) => assignment.course === courseId);
    return await model.find({ course: courseId });
  }

  async function deleteAssignment(assignmentId) { 
    return await model.deleteOne({ _id: assignmentId });
  } 

  async function updateAssignment(assignmentId, assignmentUpdates) { 
    await model.updateOne(
      { _id: assignmentId }, 
      { $set: assignmentUpdates }
    );
    return await model.findOne({ _id: assignmentId });
  } 

  return {
    findAssignmentsForCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
} 