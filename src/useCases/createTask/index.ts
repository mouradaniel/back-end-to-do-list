import { TasksRepository } from '../../repositories/implementations/TasksRepository';
import { CreateTaskController } from './createTaskController';
import { CreateTaskUseCase } from './createTaskUseCase';

const tasksRepository = new TasksRepository();

const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
