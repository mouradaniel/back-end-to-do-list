import { TasksRepository } from '../../repositories/implementations/TasksRepository';
import { ListTaskController } from './listTasksController';
import { ListTasksUseCase } from './listTasksUseCase';

const tasksRepository = TasksRepository.getInstance();
const listTasksUseCase = new ListTasksUseCase(tasksRepository);
const listTasksController = new ListTaskController(listTasksUseCase);

export { listTasksController };
