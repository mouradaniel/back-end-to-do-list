import { TasksRepository } from '../../repositories/implementations/TasksRepository';
import { CreateTaskController } from './createTaskController';
import { CreateTaskUseCase } from './createTaskUseCase';

const tasksRepository = TasksRepository.getInstance();
const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
