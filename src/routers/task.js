const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task({ ...req.body });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const category = req.body.category;
    const description = req.body.description;
    const priority = req.body.priority;

    const result = await Task.updateOne({ _id }, { category, description, priority });

    if (!result) {
      return res.status(404).send();
    }

    res.send("Updated!");
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });

    if (!task) {
      res.status(404).send();
    }

    res.send("Deleted!");
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
