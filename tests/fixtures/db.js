const Task = require("../../src/models/task");
const mongoose = require("mongoose");

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  category: "Personal",
  description: "Organizing the next day's tasks",
  priority: "High"
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  category: "Work",
  description: "Re-read the book 'Clean Code'",
  priority: "Low"
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  category: "Other",
  description: "Going to the supermarket",
  priority: "Medium"
};

const setupDatabase = async () => {
  await Task.deleteMany();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase
};
