import { Task } from '../model/Task';

interface ICreateTaskDTO {
  category: string;
  description: string;
  priority?: string;
}

interface ITasksRepository {
  create({ category, description, priority }: ICreateTaskDTO): void;
  list(): Task[];
}

export { ICreateTaskDTO, ITasksRepository };
