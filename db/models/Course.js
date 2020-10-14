const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    minlength: 2,
    maxlength: 20,
    required: true,
    lowercase: true,
  },
  holes: [{number: Number, par: Number}]
    
  },
});

courseSchema.pre("save", function (next) {
  return next();
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
