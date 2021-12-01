const taskRepo = require('./task.memory.repository');

const getAllTasks = () => taskRepo.getAllTasks();

const createNewTask = (taskValues) => taskRepo.createNewTask(taskValues);

const unassignUser = (userId) => taskRepo.unassignUser(userId);

const findTaskById = (taskId) => taskRepo.findTaskById(taskId);

module.exports = {
  getAllTasks,
  createNewTask,
  unassignUser,
  findTaskById,
}
