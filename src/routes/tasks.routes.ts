import { Router } from 'express';

import { createTaskController } from '../useCases/createTask';

const tasksRoutes = Router();

tasksRoutes.post('/', (req, res) => {
  return createTaskController.handle(req, res);
});

export { tasksRoutes };
