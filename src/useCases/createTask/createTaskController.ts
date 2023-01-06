import { Request, Response } from 'express';

import { CreateTaskUseCase } from './createTaskUseCase';

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle(req: Request, res: Response) {
    const { category, description, priority } = req.body;

    this.createTaskUseCase.execute({
      category,
      description,
      priority,
    });

    return res.status(201).send();
  }
}

export { CreateTaskController };
