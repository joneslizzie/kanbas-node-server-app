import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
 app.delete("/api/enrollments/:assignments", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await enrollmentsDao.unenrollUserInCourse(assignmentId);
   res.send(status);
 });
 app.put("/api/assignments/:assignments", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await enrollmentsDao.enrollUserInCourse(assignmentId, assignmentUpdates);
    res.send(status);
  });

}
