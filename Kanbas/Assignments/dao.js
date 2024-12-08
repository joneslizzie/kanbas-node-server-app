import Database from "../Database/index.js";
import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}
export function createAssignments(assignment) {
    delete assignment._id
    return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}  
export function updateAssignment(assignmentId, assignmentIdUpdates) {
    return model.updateOne({ number: assignmentId }, { $set: assignmentIdUpdates });
  }
  