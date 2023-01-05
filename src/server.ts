import dotenv from 'dotenv';
import express from 'express';

import './db/mongoose.js';

import taskRouter from './routers/task.js';

const app = express();

app.use(express.json());
app.use(taskRouter);

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
