const fastify = require("fastify");
const swaggerUI = require("fastify-serve-swagger-ui");
const usersRouter = require("./resources/users/user.router");
const boardsRouter = require("./resources/boards/board.router");
const tasksRouter = require("./resources/tasks/task.router");

const app = fastify();

app.register(swaggerUI, {
  path: "/doc",
  specification: {
    type: "url",
    path: "../../doc/api.yaml",
  },
});

app.get('/', (req, res) => {
  res.send('Service is running!');
});

app.register(usersRouter);
app.register(boardsRouter);
app.register(tasksRouter);

module.exports = { app };
