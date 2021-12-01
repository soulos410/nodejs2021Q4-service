const fastify = require("fastify");
const swaggerUI = require("fastify-serve-swagger-ui");
const usersRouter = require("./resources/users/user.router");

const app = fastify({ logger: true });

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

module.exports = { app };
