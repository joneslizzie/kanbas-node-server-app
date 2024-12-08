import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
    number: { type: String, required: true, default: 'A000'},
    title: { type: String, required: true, default: 'Untitled Assignment' },
    course: { type: String, ref: "CourseModel", required: true },
    releaseDate: { type: mongoose.Schema.Types.Date, required: false },
    dueDate: { type: mongoose.Schema.Types.Date, required: false },
    points: { type: Number, required: false },
    description: { type: String, required: true, default: 'Description' },
    assignmentGroup: {
      type: String,
      enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"],
      default: "ASSIGNMENTS",
      required: true
    },
    submissionType: {
      type: String,
      enum: ["Online", "Gradescope", "In Person"],
      default: "Online",
      required: true
    },
    displayGradeAs: {
      type: String,
      enum: ["Points", "Letter", "Percentage"],
      default: "Percentage",
      required: true
    },
    onlineEntryOptions: [{ type: String, required: false }],
    assignTo: { type: String, required: true, default: 'Everyone' },
    availableUntil: { type: mongoose.Schema.Types.Date, required: false },
  },
 { collection: "assignments" }
);
export default assignmentSchema;