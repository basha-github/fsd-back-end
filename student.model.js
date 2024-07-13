const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Student name"],
    },
    course: {
        type: String,
        required: [true, "Please enter Student name"],
      },
      fee: {
        type: Number,
        required: [true, "Please enter Student name"],
      },
      marks: {
        type: Number,
        required: [true, "Please enter Student name"],
      }

   
  },
  {
    timestamps: true,
  }
);


const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;








