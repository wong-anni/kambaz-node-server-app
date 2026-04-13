import EnrollmentsDao from "../enrollments/dao.js"; 

export default function EnrollmentsRoutes(app) { 
  const dao = EnrollmentsDao(); 

  const findEnrollmentsForUser = async (req, res) => { 
    const { userId } = req.params; 
    const enrollments = await dao.findEnrollmentsForUser(userId); 
    res.json(enrollments); 
  } 

  // const deleteEnrollment = async (req, res) => { 
  //   const { userId, courseId } = req.params;
  //   const status = await dao.unenrollUserFromCourse(userId, courseId);
  //   res.send(status); 
  // } 

  // const createEnrollmentForUser = async (req, res) => { 
  //   const { userId, courseId } = req.params;
  //   const newEnrollment = await dao.enrollUserInCourse(userId, courseId);
  //   res.send(newEnrollment); 
  // } 

  // app.delete("/api/enrollments/:userId/:courseId", deleteEnrollment);
  // app.post("/api/enrollments/:userId/:courseId", createEnrollmentForUser); 
  app.get("/api/enrollments/:userId", findEnrollmentsForUser); 
} 