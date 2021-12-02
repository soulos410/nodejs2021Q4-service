const app = require("fastify")();
const {fastifySwagger} = require("fastify-swagger");
const path = require("path");
const usersRouter = require("./resources/users/user.router");
const boardsRouter = require("./resources/boards/board.router");
const tasksRouter = require("./resources/tasks/task.router");

app.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
  },
});

app.register(usersRouter);
app.register(boardsRouter);
app.register(tasksRouter);

module.exports = { app };
