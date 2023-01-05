import { ITasksRepository } from '../../repositories/ITasksRepository';

interface IRequest {
  category: string;
  description: string;
  priority: string;
}

class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  execute({ category, description, priority }: IRequest): void {
    this.tasksRepository.create({ category, description, priority });
  }
}

export { CreateTaskUseCase };
