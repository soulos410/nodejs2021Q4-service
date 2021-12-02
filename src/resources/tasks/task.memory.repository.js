const Task = require("./task.model");

const tasksDatabase = [];

const getAllTasks = () => tasksDatabase;

const createNewTask = (taskFields) => {
  const createdTask = new Task(taskFields);

  tasksDatabase.push(createdTask);

  return createdTask;
};

const findTaskById = (taskId) => {
  const foundedTask = tasksDatabase.find((task) => task.id === taskId);

  if (foundedTask) {
    return foundedTask;
  }

  throw new Error("Task not found");
};

const unassignUser = (userId) =>
  tasksDatabase.forEach((task) => {
    if (task.userId === userId) {
      task.unassignUser();
    }
  });

const updateTask = (taskId, newValues) => {
  const taskToUpdate = findTaskById(taskId);

  taskToUpdate.update(newValues)
};

const deleteTaskById = (taskId) => {
  const taskToDeleteIndex = tasksDatabase.indexOf(findTaskById(taskId));

  if (taskToDeleteIndex >= 0) {
    tasksDatabase.splice(taskToDeleteIndex, 1);
  } else {
    throw new Error("Task not found");
  }
}

const removeBoardTasks = (boardId) => {
  const tasksToDelete = tasksDatabase.filter((task) => task.boardId === boardId);
  const tasksToDeleteIds = tasksToDelete.map((task) => task.id);

  tasksToDeleteIds.forEach((task) => deleteTaskById(task));
}

module.exports = {
  getAllTasks,
  createNewTask,
  unassignUser,
  findTaskById,
  updateTask,
  deleteTaskById,
  removeBoardTasks,
};
