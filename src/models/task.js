const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    category: {
      type: String
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String
    }
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
