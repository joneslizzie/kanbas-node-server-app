import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    const assignmentsInCourse = assignments.filter((assignment) =>
      assignment.course === courseId);
    return assignmentsInCourse;
}
export function createAssignments(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => a._id !== assignmentId);
}  
export function updateCourse(assignmentId, assignmentIdUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentIdUpdates);
    return assignment;
  }
  