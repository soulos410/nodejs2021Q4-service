const Task = require("./task.model");

const tasksDatabase = [];

const getAllTasks = () => tasksDatabase;

const createNewTask = (taskFields) => {
  const createdTask = new Task(taskFields);

  tasksDatabase.push(createdTask);

  return createdTask;
};

const findTaskById = (taskId) => tasksDatabase.find((task) => task.id === taskId);

const unassignUser = (userId) => {
  tasksDatabase.forEach((task) => {
    if (task.userId === userId) {
      task.unassignUser();
    }
  });
};

module.exports = {
  getAllTasks,
  createNewTask,
  unassignUser,
  findTaskById,
};
