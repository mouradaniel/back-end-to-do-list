import { Task } from '../../model/Task';
import { ITasksRepository } from '../../repositories/ITasksRepository';

class ListTasksUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  execute(): Task[] {
    const tasks = this.tasksRepository.list();

    return tasks;
  }
}

export { ListTasksUseCase };
