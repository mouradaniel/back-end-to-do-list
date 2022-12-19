require("dotenv").config();
const request = require("supertest");

const app = require("../src/app");

const Task = require("../src/models/task");

const { taskOne, taskTwo, taskThree, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

describe("All possible actions for tasks: ", () => {
  test("Should create task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        category: "Personal",
        description: "Make coffe",
        priority: "High",
      })
      .expect(201);
  
    const task = await Task.findById(response.body._id);
  
    expect(task).not.toBeNull();
  
    expect(task.completed).toEqual(false);
  });
  
  test("Should get all tasks", async () => {
    const response = await request(app)
      .get("/tasks")
      .send()
      .expect(200);
  
    expect(response.body.length).toEqual(3);
  });

  test("Should get task by id", async () => {
    const response = await request(app)
      .get(`/tasks/${taskTwo._id}`)
      .send()
      .expect(200);
    
    expect(response.body.category).toEqual("Work");
  });

  test("Should change task", async () => {
    const response = await request(app)
      .patch(`/tasks/${taskThree._id}`)
      .send({ "priority": "High" })
      .expect(200);

    const task = await Task.findById(taskThree._id);
    
    expect(task.priority).toEqual("High");
  });
  
  test("Should delete tasks", async () => {
    const response = await request(app)
      .delete(`/tasks/${taskOne._id}`)
      .send()
      .expect(200);
  
    const task = await Task.findById(taskOne._id);
  
    expect(task).toBeNull();
  });
})
