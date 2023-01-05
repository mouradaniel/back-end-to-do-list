interface ICreateTaskDTO {
  category: string;
  description: string;
  priority?: string;
}

interface ITasksRepository {
  create({ category, description, priority }: ICreateTaskDTO): void;
}

export { ICreateTaskDTO, ITasksRepository };
