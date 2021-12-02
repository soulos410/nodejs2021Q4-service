const taskRepo = require('./task.memory.repository');

const getAllTasks = () => taskRepo.getAllTasks();

const createNewTask = (taskValues) => taskRepo.createNewTask(taskValues);

const unassignUser = (userId) => taskRepo.unassignUser(userId);

const findTaskById = (taskId) => taskRepo.findTaskById(taskId);

const updateTask = (taskId, fieldsToUpdate) => taskRepo.updateTask(taskId, fieldsToUpdate);

const deleteTaskById = (taskId) => taskRepo.deleteTaskById(taskId);

const removeBoardTasks = (boardId) => taskRepo.removeBoardTasks(boardId);

module.exports = {
  getAllTasks,
  createNewTask,
  unassignUser,
  findTaskById,
  updateTask,
  deleteTaskById,
  removeBoardTasks,
}
