const taskService = require("./task.service");

const tasksRouter = (fastify, options, done) => {
  fastify.get(
    "/boards/:boardId/tasks",
    async (req, res) => {
      const tasks = taskService.getAllTasks();

      if (tasks.length > 0) {
        res
          .status(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(tasks);
      } else {
        res
          .status(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(tasks);
      }
    },
  );

  fastify.get(
    "/boards/:boardId/tasks/:taskId",
    async (req, res) => {
      const {taskId} = req.params;
      const task = taskService.findTaskById(taskId);

      res
        .status(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(task);
    },
  );

  fastify.post(
    "/boards/:boardId/tasks",
    async (req, res) => {
      const {boardId} = req.params;
      const tasks = taskService.createNewTask({...req.body, boardId });

        res
          .status(201)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(tasks);
    },
  );

  done();
};

module.exports = tasksRouter;
