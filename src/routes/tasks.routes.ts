import { Router } from 'express';

import { createTaskController } from '../useCases/createTask';
import { listTasksController } from '../useCases/listTasks';

const tasksRoutes = Router();

tasksRoutes.post('/', (req, res) => {
  return createTaskController.handle(req, res);
});

tasksRoutes.get('/', (req, res) => {
  return listTasksController.handle(req, res);
});

export { tasksRoutes };
