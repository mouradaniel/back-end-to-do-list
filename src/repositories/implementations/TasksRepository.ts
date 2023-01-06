import { Task } from '../../model/Task';
import { ICreateTaskDTO, ITasksRepository } from '../ITasksRepository';

class TasksRepository implements ITasksRepository {
  private tasks: Task[];

  private static INSTANCE: TasksRepository;

  constructor() {
    this.tasks = [];
  }

  public static getInstance(): TasksRepository {
    if (!TasksRepository.INSTANCE) {
      TasksRepository.INSTANCE = new TasksRepository();
    }

    return TasksRepository.INSTANCE;
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

  list(): Task[] {
    return this.tasks;
  }
}

export { TasksRepository };
