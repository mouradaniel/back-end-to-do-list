import { Request, Response } from 'express';

import { ListTasksUseCase } from './listTasksUseCase';

class ListTaskController {
  constructor(private listTaskUseCase: ListTasksUseCase) {}

  handle(req: Request, res: Response): Response {
    const tasks = this.listTaskUseCase.execute();

    return res.json(tasks);
  }
}

export { ListTaskController };
