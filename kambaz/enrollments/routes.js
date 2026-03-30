import EnrollmentsDao from "../enrollments/dao.js"; 

export default function EnrollmentsRoutes(app, db) { 
  const dao = EnrollmentsDao(db); 

  const findEnrollmentsForUser = (req, res) => { 
    const { userId } = req.params; 
    const enrollments = dao.findEnrollmentsForUser(userId); 
    res.json(enrollments); 
  } 

  const deleteEnrollment = (req, res) => { 
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserFromCourse(userId, courseId);
    res.send(status); 
  } 

  const createEnrollmentForUser = (req, res) => { 
    const { userId, courseId } = req.params;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.send(newEnrollment); 
  } 

  app.delete("/api/enrollments/:userId/:courseId", deleteEnrollment);
  app.post("/api/enrollments/:userId/:courseId", createEnrollmentForUser); 
  app.get("/api/enrollments/:userId", findEnrollmentsForUser); 
} 