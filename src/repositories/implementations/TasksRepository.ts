import { Task } from '../../model/Task';
import { ICreateTaskDTO, ITasksRepository } from '../ITasksRepository';

class TasksRepository implements ITasksRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  create({ category, description, priority }: ICreateTaskDTO): void {
    const task = new Task();

    Object.assign(task, {
      category,
      description,
      priority,
    });

    this.tasks.push(task);
  }
}

export { TasksRepository };
