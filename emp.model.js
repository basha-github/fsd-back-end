const mongoose = require("mongoose");
const EmpSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter  name"],
    },
    org: {
        type: String,
        required: [true, "Please enter org "],
      },
      salary: {
        type: Number,
        required: [true, "Please enter salary"],
      }
      

   
  },
  {
    timestamps: true,
  }
);


const Employee = mongoose.model("Student", EmpSchema);

module.exports = Employee;








